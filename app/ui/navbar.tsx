"use client";

import { ContactButton } from "@/app/ui/button/contact-button";
import { MenuButton } from "@/app/ui/button/menu-button";
import { SocialLinks } from "@/app/ui/social-icons";
import { WordMark } from "@/app/ui/wordmark";
import { paths } from "@/app/util/nav-links";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
export interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) html.classList.toggle("overflow-hidden", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("orientationchange", closeMenu);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("orientationchange", closeMenu);
      window.removeEventListener("resize", closeMenu);
    };
  }, [closeMenu]);

  return (
    <header className={classNames("sticky top-0 z-50 h-18 py-2")}>
      <div
        className={classNames(
          "sticky top-0 z-50 flex flex-col items-start overflow-hidden rounded-3 bg-neutral-900/80 shadow-border backdrop-blur-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "h-[calc(100dvh-2rem)]" : "h-14",
        )}
      >
        <div className="flex h-14 w-full shrink-0 justify-between">
          <div className="ml-5 mt-2 flex h-10 items-center">
            <Link href="/" onClick={closeMenu}>
              <WordMark className="pr-10 md:pr-0" />
            </Link>
          </div>
          <nav
            className={classNames(
              "my-auto hidden translate-y-8 opacity-0 blur-md transition-discrete",
              "md:flex md:translate-y-0 md:opacity-100 md:blur-0 md:starting:translate-y-8 md:starting:opacity-0 md:starting:blur-md",
              "transition-[display, opacity, transform, blur] duration-300",
            )}
          >
            {paths.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={classNames(
                  "relative px-5 uppercase transition-all duration-200 ease-out ~text-base/md hover:text-neutral-100",
                  pathname === path ? "text-neutral-100" : "text-neutral-200",
                )}
              >
                {label}
                <span
                  className={classNames(
                    "absolute inset-x-5 top-[48%] block h-0.5 bg-neutral-100 transition-all duration-200",
                    pathname === path ? "max-w-full" : "max-w-0",
                  )}
                ></span>
              </Link>
            ))}
          </nav>
          <div
            className={classNames(
              "absolute right-2 top-2 block translate-y-0 opacity-100 blur-0 starting:-translate-y-8 starting:opacity-0 starting:blur-md",
              "md:hidden md:-translate-y-8 md:opacity-0 md:blur-md",
              "transition-[transform, display] duration-300 transition-discrete",
            )}
          >
            <MenuButton onClick={() => toggleMenu()} isOpen={isMenuOpen} />
          </div>
          <ContactButton
            className={classNames(
              "my-auto mr-5 hidden translate-y-8 opacity-0 blur-md",
              "md:block md:translate-y-0 md:opacity-100 md:blur-0 md:starting:translate-y-8 md:starting:opacity-0 md:starting:blur-md",
              "transition-[opacity, transform, display] duration-300 transition-discrete",
            )}
          />
        </div>
        <div
          className={classNames(
            "flex w-full flex-grow flex-col justify-between py-4 pl-5 pr-2",
            "md:hidden md:starting:flex",
            "transition-[display] duration-300 transition-discrete",
          )}
        >
          <nav className={classNames("flex flex-col items-start gap-5")}>
            {paths.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                onClick={() => toggleMenu()}
                className={classNames(
                  "relative text-xl uppercase transition-all duration-200 ease-out hover:text-neutral-100",
                  pathname === path ? "text-neutral-100" : "text-neutral-200",
                  isMenuOpen
                    ? "translate-y-0 opacity-100 blur-0"
                    : "-translate-y-8 opacity-0 blur-md",
                )}
              >
                {label}
                <span
                  className={classNames(
                    "absolute top-[48%] block h-[0.2rem] bg-neutral-100",
                    pathname === path ? "w-full" : "w-0",
                  )}
                ></span>
              </Link>
            ))}
          </nav>
          <div
            className={classNames(
              "flex items-center justify-between transition-all duration-200",
              isMenuOpen ? "opacity-100 blur-0" : "opacity-0 blur-md",
            )}
          >
            <ContactButton />
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
