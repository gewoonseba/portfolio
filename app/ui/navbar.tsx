"use client";

import { WordMark } from "@/app/ui/wordmark";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import classNames from "classnames";
import { Menu } from "lucide-react";
import { IconButton } from "@/app/ui/icon-button";
import { IconLink } from "@/app/ui/icon-link";
import { ContactButton } from "@/app/ui/contact-button";
import { useEffect, useState } from "react";
import useDetectAgent from "@/app/util/mobile-detect";
import { Instagram } from "@/app/icons/instagram";
import { LinkedIn } from "@/app/icons/linkedin";

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

  const currentDevice = useDetectAgent();

  return (
    <div
      className={classNames(
        "sticky top-0 z-50 h-18 w-full py-2 pl-2",
        isMenuOpen && currentDevice.isDesktop() ? "pr-4" : "pr-2", //account for scrollbar dissapearing on menu open
      )}
    >
      <div
        className={classNames(
          "border-1 sticky top-0 z-50 box-content flex w-full flex-col items-start overflow-hidden rounded-3 border border-neutral-100 backdrop-blur-md transition-all duration-300 ease-in-out",
          isMenuOpen ? "h-[calc(100vh-2rem)]" : "h-full",
        )}
      >
        <div className="flex h-14 w-full justify-between">
          <div className="ml-5 mt-2 flex h-10 items-center">
            <Link href="/">
              <WordMark className="pr-10 md:pr-0" />
            </Link>
          </div>
          <nav
            className={classNames(
              "my-auto hidden translate-y-8 opacity-0 transition-discrete",
              "md:flex md:translate-y-0 md:opacity-100 md:starting:translate-y-8 md:starting:opacity-0",
              "transition-[display, opacity, transform] duration-300",
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
          <div
            className={classNames(
              "absolute right-2 top-2 block translate-y-0 opacity-100",
              "md:hidde md:-translate-y-8 md:opacity-0 md:starting:translate-y-0 md:starting:opacity-100",
              "transition-[opacity, transform, display] duration-300 transition-discrete",
            )}
          >
            <IconButton onClick={() => toggleMenu()}>
              <Menu />
            </IconButton>
          </div>
          <ContactButton
            className={classNames(
              "my-auto mr-5 hidden translate-y-8 opacity-0",
              "md:block md:translate-y-0 md:opacity-100 md:starting:translate-y-8 md:starting:opacity-0",
              "transition-[opacity, transform, display] duration-300 transition-discrete",
            )}
          />
        </div>
        <div className="flex w-full flex-grow flex-col justify-between py-4 pl-5 pr-2 md:hidden">
          <nav className={classNames("mt-4 flex flex-col items-start")}>
            {paths.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => toggleMenu()}
                className={clsx(
                  "relative mb-6 text-xl uppercase transition-all duration-200 ease-out hover:text-neutral-100",
                  { "text-neutral-200": pathname !== path },
                  { "text-neutral-100": pathname === path },
                )}
              >
                {label}
                <span
                  className={clsx(
                    "absolute top-4 block h-[0.3rem] bg-neutral-100 transition-all duration-200",
                    { "w-0": pathname !== path },
                    { "w-full": pathname === path },
                  )}
                ></span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-between">
            <ContactButton />
            <div className="flex gap-1">
              <IconLink href="https://www.instagram.com/gewoon.seba/">
                <Instagram />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/sebastian-stoelen-43b605b4/">
                <LinkedIn />
              </IconLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
