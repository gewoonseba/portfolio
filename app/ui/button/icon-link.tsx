import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface IconLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const IconLink = ({ children, className, href }: IconLinkProps) => {
  return (
    <Link
      className={classNames(
        "flex size-10 shrink-0 items-center justify-center rounded-md transition-colors duration-150 hover:bg-btn-secondary-hover",
        className,
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
};
