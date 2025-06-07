"use client";

// Adapted from Sentry to not be limited by container height
// Original source: https://github.com/getsentry/sentry/blob/083f5c78a58a4ee4f9cfa51526f29924adc14f09/static/app/views/dashboards/widgetCard/autoSizedText.tsx
// Article: https://sentry.engineering/blog/perfectly-fitting-text-to-container-in-react

import { useLayoutEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export function AutoSizedText({ children }: Props) {
  const childRef = useRef<HTMLDivElement>(null);

  const fontSize = useRef<number>(0);
  const fontSizeLowerBound = useRef<number>(0);
  const fontSizeUpperBound = useRef<number>(0);

  useLayoutEffect(() => {
    const childElement = childRef.current; // This is the text container
    const parentElement = childRef.current?.parentElement; // This is the parent of `AutoSizedText`

    if (!childElement || !parentElement) {
      return undefined;
    }

    if (!window.ResizeObserver) {
      // `ResizeObserver` is missing in a test environment. In this case,
      // run one iteration of the resize behaviour so a test can at least
      // verify that the component doesn't crash.
      const childDimensions = getElementDimensions(childElement);
      const parentDimensions = getElementDimensions(parentElement);

      adjustFontSize(childDimensions, parentDimensions);
      return undefined;
    }

    // On component first mount, register a `ResizeObserver` on the containing element. The handler fires
    // on component mount, and every time the element changes size after that
    const observer = new ResizeObserver((entries) => {
      // The entries list contains an array of every observed item. Here it is only one element
      const entry = entries[0];

      if (!entry) {
        return;
      }

      // The resize handler passes the parent's dimensions, so we don't have to get the bounding box
      const parentDimensions = entry.contentRect;

      // Reset the iteration parameters - use a large upper bound since we're not constrained by height
      fontSizeLowerBound.current = 0;
      fontSizeUpperBound.current = 500; // Large upper bound for width-only fitting

      let iterationCount = 0;

      // Run the resize iteration in a loop. This blocks the main UI thread and prevents
      // visible layout jitter. If this was done through a `ResizeObserver` or React State
      // each step in the resize iteration would be visible to the user
      while (iterationCount <= ITERATION_LIMIT) {
        const childDimensions = getElementDimensions(childElement);

        const widthDifference = parentDimensions.width - childDimensions.width;

        // Only check width fit, ignore height completely
        const childFitsIntoParent = widthDifference >= 0;
        const childIsWithinWidthTolerance =
          Math.abs(widthDifference) <= MAXIMUM_DIFFERENCE;

        if (childFitsIntoParent && childIsWithinWidthTolerance) {
          // Stop the iteration, we've found a fit!
          break;
        }

        adjustFontSize(childDimensions, parentDimensions);

        iterationCount += 1;
      }
    });

    observer.observe(parentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  const adjustFontSize = (
    childDimensions: Dimensions,
    parentDimensions: Dimensions,
  ) => {
    const childElement = childRef.current;

    if (!childElement) {
      return;
    }

    let newFontSize;

    // Only consider width for adjustments, ignore height completely
    if (childDimensions.width > parentDimensions.width) {
      // The element is wider than the parent, scale down
      newFontSize = (fontSizeLowerBound.current + fontSize.current) / 2;
      fontSizeUpperBound.current = fontSize.current;
    } else if (childDimensions.width < parentDimensions.width) {
      // The element is narrower than the parent, scale up
      newFontSize = (fontSizeUpperBound.current + fontSize.current) / 2;
      fontSizeLowerBound.current = fontSize.current;
    }

    if (newFontSize !== undefined) {
      // Store font size in a ref so we don't have to measure styles to get it
      fontSize.current = newFontSize;
      childElement.style.fontSize = `${newFontSize}px`;
    }
  };

  return (
    <div ref={childRef} className="inline-block">
      {children}
    </div>
  );
}

const ITERATION_LIMIT = 20;

// The maximum difference strongly affects the number of iterations required.
// A value of 10 means that matches are often found in fewer than 5 iterations.
// A value of 5 raises it to 6-7. A value of 1 brings it closer to 10. A value of
// 0 never converges.
// Note that on modern computers, even with 6x CPU throttling the iterations usually
// finish in under 5ms.
const MAXIMUM_DIFFERENCE = 1; // px

type Dimensions = {
  height: number;
  width: number;
};

function getElementDimensions(element: HTMLElement): Dimensions {
  const bbox = element.getBoundingClientRect();

  return {
    width: bbox.width,
    height: bbox.height,
  };
}
