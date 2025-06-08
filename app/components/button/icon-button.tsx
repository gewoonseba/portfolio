import classNames from "classnames";
import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function IconButton({
  children,
  className,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={classNames(
        "hover:bg-btn-secondary-hover active:bg-btn-secondary-hover flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-md transition-colors duration-150",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
