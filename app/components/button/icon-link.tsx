import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

export default function IconLink({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link
      className={classNames(
        "hover:bg-btn-secondary-hover flex size-10 shrink-0 items-center justify-center rounded-md transition-colors duration-150",
        className,
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}
