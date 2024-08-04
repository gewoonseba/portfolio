"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { paths } from "@/app/util/nav-links";
import { SocialLinks } from "@/app/ui/social-icons";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer
      className={classNames("grid grid-cols-3 items-center pb-2", className)}
    >
      <nav>
        {paths.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={classNames(
              "relative mr-4 uppercase transition-all duration-200 ease-out ~text-base/md hover:text-neutral-100",
              pathname === path ? "text-neutral-100" : "text-neutral-200",
            )}
          >
            {label}
            <span
              className={classNames(
                "absolute inset-x-0 top-[0.9rem] block h-0.5 bg-neutral-100 transition-all duration-200",
                pathname === path ? "max-w-full" : "max-w-0",
              )}
            ></span>
          </Link>
        ))}
      </nav>
      <p className="justify-self-center text-center uppercase">
        © {new Date().getFullYear()}{" "}
        <span className="whitespace-nowrap">Gewoon Seba</span>
      </p>
      <SocialLinks className="justify-self-end" />
    </footer>
  );
};
