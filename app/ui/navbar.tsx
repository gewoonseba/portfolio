"use client";

import { LogoSmall } from "@/app/ui/logo-small";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import classNames from "classnames";
import { Menu } from "lucide-react";
import { IconButton } from "@/app/ui/icon-button";
import { ContactButton } from "@/app/ui/contact-button";
import { useEffect, useState } from "react";

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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div
      className={classNames(
        "h-18 sticky top-0 z-50 w-full py-2 pl-2",
        isMenuOpen ? "pr-4" : "pr-2", //account for scrollbar dissapearing on menu open
      )}
    >
      <div
        className={classNames(
          "border-1 sticky top-0 z-50 box-content flex w-full items-start justify-between overflow-hidden rounded-3 border border-neutral-100 backdrop-blur-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "h-[calc(100vh-2rem)]" : "h-full",
        )}
      >
        <div className="m-2 flex h-10 items-center">
          <Link href="/">
            <LogoSmall />
          </Link>
        </div>
        <nav
          className={classNames(
            "my-auto hidden translate-y-8 opacity-0 [transition-behavior:allow-discrete]",
            "md:flex md:translate-y-0 md:opacity-100",
            "transition-[opacity, transform] duration-200"
          )}
        >
          {paths.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={clsx(
                "relative px-5 uppercase transition-all duration-200 ease-out hover:text-neutral-100",
                { "text-neutral-200": pathname !== path },
                { "text-neutral-100": pathname === path },
              )}
            >
              {label}
              <span
                className={clsx(
                  "absolute inset-x-5 top-[0.9rem] block h-0.5 max-w-0 bg-neutral-100 transition-all duration-200",
                  { "max-w-full": pathname === path },
                )}
              ></span>
            </Link>
          ))}
        </nav>
        <ContactButton
          className={classNames(
            "my-auto mr-2 hidden translate-y-8 opacity-0 [transition-behavior:allow-discrete]",
            "md:block md:translate-y-0 md:opacity-100",
            "transition-[opacity, transform] duration-200",
          )}
        />
        <IconButton
          onClick={() => toggleMenu()}
          className="mr-2 mt-2 block border border-neutral-200 md:hidden"
        >
          <Menu />
        </IconButton>
      </div>
    </div>
  );
}
