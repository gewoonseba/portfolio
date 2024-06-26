"use client";

import { LogoSmall } from "@/app/ui/logo-small";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import classNames from "classnames";
import { Menu } from "lucide-react";
import { IconButton } from "@/app/ui/icon-button";
import { ContactButton } from "@/app/ui/contact-button";

export interface NavbarProps {
  className?: string;
}

export interface NavLinks {
  path: string;
  label: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const paths = [
    { path: "/", label: "Design" },
    { path: "/photos", label: "Photos" },
  ] as NavLinks[];
  return (
    <nav
      className={classNames(
        "sticky top-0 z-50 flex h-14 w-full justify-between overflow-hidden px-4 backdrop-blur-md",
      )}
    >
      <div className="my-auto">
        <Link href="/">
          <LogoSmall />
        </Link>
      </div>
      <div
        className={classNames(
          "my-auto translate-y-8 opacity-0",
          "md:visible md:translate-y-0 md:opacity-100",
          "transition-[opacity, transform] duration-200",
        )}
      >
        {paths.map(({ path, label }) => (
          <Link
            key={path}
            href={path}
            className={clsx(
              "group relative p-5 uppercase transition-all duration-200 ease-out hover:text-neutral-100",
              { "text-neutral-200": pathname !== path },
              { "text-neutral-100": pathname === path },
            )}
          >
            {label}
            <span
              className={clsx(
                "absolute inset-x-5 top-[2.9rem] block h-0.5 max-w-0 bg-neutral-100 transition-all duration-200",
                { "max-w-full": pathname === path },
              )}
            ></span>
          </Link>
        ))}
      </div>

      <div
        className={classNames(
          "my-auto mr-0 flex flex-col items-end justify-start overflow-visible h-10 pb-1",
          "md:-translate-y-8 transition-transform duration-200",
        )}
      >
        <IconButton
          onClick={() => alert("Icon button clicked")}
          className="md:invisible md:opacity-0 transition-opacity duration-200"
        >
          <Menu />
        </IconButton>
        <ContactButton className="invisible opacity-0 md:visible md:opacity-100 transition-opacity duration-200" />
      </div>
    </nav>
  );
}
