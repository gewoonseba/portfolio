import Image from "next/image";
import classNames from "classnames";

export type ProjectImage = {
  src: string;
  alt: string;
  gridSpan?: "default" | "wide" | "tall";
};

interface ProjectImageGalleryProps {
  images: ProjectImage[];
  className?: string;
}

export function ProjectImageGallery({ images, className }: ProjectImageGalleryProps) {
  const getGridClasses = (gridSpan?: string, index?: number) => {
    // First and last images can be wide (2 columns)
    if (gridSpan === "wide" || (index === 0 || index === images.length - 1)) {
      return "md:col-span-2 md:aspect-auto";
    }
    // Second and third images are tall (2 rows)
    if (gridSpan === "tall" || (index === 1 || index === 2)) {
      return "row-span-2";
    }
    return "aspect-square";
  };

  return (
    <div className={classNames(
      "grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-3 md:grid-rows-3",
      className
    )}>
      {images.map((image, index) => (
        <div
          key={index}
          className={classNames(
            "bg-btn-secondary-hover border-secondary relative overflow-hidden rounded-md border",
            getGridClasses(image.gridSpan, index)
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}