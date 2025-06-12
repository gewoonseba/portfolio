import Image from "next/image";
import classNames from "classnames";

interface StyledImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export function StyledImage({ 
  src, 
  alt, 
  className, 
  imageClassName,
  fill = true,
  width,
  height
}: StyledImageProps) {
  return (
    <div className={classNames(
      "bg-btn-secondary-hover border-secondary relative overflow-hidden rounded-md border",
      className
    )}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={classNames("object-cover", imageClassName)}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={classNames("object-cover", imageClassName)}
        />
      )}
    </div>
  );
}