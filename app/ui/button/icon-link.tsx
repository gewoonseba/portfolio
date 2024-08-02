import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";

interface IconLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const IconLink = ({ children, className, href }: IconLinkProps) => {
  return (
    <Link
      className={classNames(
        "flex size-10 shrink-0 items-center justify-center rounded-2 transition-colors duration-150 hover:bg-neutral-800",
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
