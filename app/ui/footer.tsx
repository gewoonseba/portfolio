"use client";

import { SocialLinks } from "@/app/ui/social-icons";
import { paths } from "@/app/util/nav-links";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const pathname = usePathname();

  return (
    <footer
      className={classNames(
        "grid justify-items-center gap-1 pb-2 md:grid-cols-3",
        className,
      )}
    >
      <nav className="flex items-center gap-4 md:justify-self-start">
        {paths.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={classNames(
              "relative uppercase transition-all duration-200 ease-out ~text-sm/base hover:text-neutral-100",
              pathname === path ? "text-neutral-100" : "text-neutral-200",
            )}
          >
            {label}
            <span
              className={classNames(
                "absolute inset-x-0 top-[48%] block h-0.5 bg-neutral-100 transition-all duration-200",
                pathname === path ? "max-w-full" : "max-w-0",
              )}
            ></span>
          </Link>
        ))}
      </nav>
      <p className="row-start-3 my-auto justify-self-center text-center uppercase ~text-sm/base md:row-start-auto">
        © {new Date().getFullYear()}{" "}
        <span className="whitespace-nowrap">Gewoon Seba</span>
      </p>
      <SocialLinks className="md:justify-self-end" />
    </footer>
  );
};
