"use client";

import { NavLinks } from "@/app/components/nav/nav-links";
import { SocialLinks } from "@/app/ui/social-icons";
import classNames from "classnames";
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
      <NavLinks />
      <p className="row-start-3 my-auto justify-self-center text-center text-base uppercase md:row-start-auto">
        © {new Date().getFullYear()}{" "}
        <span className="whitespace-nowrap">Gewoon Seba</span>
      </p>
      <SocialLinks className="md:justify-self-end" />
    </footer>
  );
};
