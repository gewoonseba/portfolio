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
        "flex size-10 shrink-0 items-center justify-center rounded-2 transition-colors duration-150 hover:bg-neutral-800 active:bg-neutral-800",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
