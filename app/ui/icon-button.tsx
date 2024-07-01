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
        "rounded-2 p-2 transition-colors hover:bg-neutral-800",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
