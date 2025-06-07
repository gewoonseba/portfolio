import classNames from "classnames";
import { ReactNode } from "react";

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
        "flex size-10 shrink-0 items-center justify-center rounded-md transition-colors duration-150 hover:bg-btn-secondary-hover active:bg-btn-secondary-hover cursor-pointer",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
