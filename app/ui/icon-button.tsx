import classNames from "classnames";
import React, { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const IconButton = ({
  children,
  className,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      className={classNames(
        "size-10 rounded-2 shrink-0 flex items-center justify-center transition-colors duration-150 hover:bg-neutral-800",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
