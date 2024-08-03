import classNames from "classnames";
import React from "react";

interface LinkRowProps {
  className?: string;
  header: string;
  byline: string;
  children: React.ReactNode;
}

export function LinkRow({ className, header, byline, children }: LinkRowProps) {
  return (
    <div
      className={classNames(
        "flex flex-col justify-between border-b border-neutral-100/5 py-3 md:flex-row md:items-center",
        className,
      )}
    >
      <div className="flex-1">
        <h3>{header}</h3>
        <p className="uppercase ~text-sm/base">{byline}</p>
      </div>
      <div className="mt-4 flex-shrink-0 md:ml-4 md:mt-0">{children}</div>
    </div>
  );
}
