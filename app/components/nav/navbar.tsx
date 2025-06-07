"use client";

import { NavLinks } from "@/app/components/nav/nav-links";
import { ContactButton } from "@/app/ui/button/contact-button";
import { MenuButton } from "@/app/ui/button/menu-button";
import { SocialLinks } from "@/app/ui/social-icons";
import { WordMark } from "@/app/ui/wordmark";
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

  // Common slide-in transition pattern used throughout the navbar
  const slideInTransition = classNames(
    "translate-y-8 opacity-0 blur-md",
    "md:translate-y-0 md:opacity-100 md:blur-none md:starting:translate-y-8 md:starting:opacity-0 md:starting:blur-md",
    "transition-[transform, display] transition-discrete duration-300",
  );

  const slideOutTransition = classNames(
    "translate-y-0 opacity-100 blur-none",
    "md:translate-y-8 md:opacity-0 md:blur-md md:starting:translate-y-0 md:starting:opacity-100 md:starting:blur-none",
    "transition-[transform, display] transition-discrete duration-300",
  );

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
          "flex flex-col items-start overflow-hidden",
          "bg-primary/80 border-secondary rounded-xl border backdrop-blur-lg",
          "transition-all duration-300 ease-in-out",
          isMenuOpen ? "h-[calc(100dvh-2rem)]" : "h-14",
        )}
      >
        <div className="flex h-14 w-full shrink-0 justify-between">
          <div className="mt-2 ml-5 flex h-10 items-center">
            <Link href="/" onClick={closeMenu}>
              <WordMark className="text-primary h-5 pr-10 md:pr-0" />
            </Link>
          </div>
          <NavLinks
            className={classNames("hidden md:flex", slideInTransition)}
          />
          <div
            className={classNames(
              "absolute top-2 right-2 block",
              slideOutTransition,
            )}
          >
            <MenuButton
              onClick={() => toggleMenu()}
              isOpen={isMenuOpen}
              className="text-primary"
            />
          </div>
          <ContactButton
            className={classNames(
              "my-auto mr-5 hidden md:block",
              slideInTransition,
            )}
          />
        </div>

        {/* MARK: Mobile Menu */}
        <div
          className={classNames(
            "flex w-full flex-grow flex-col justify-between py-4 pr-2 pl-5",
          )}
        >
          <NavLinks onNavClicked={toggleMenu} variant="mobile-menu" />
          <div className="flex items-center justify-between">
            <ContactButton />
            <SocialLinks />
          </div>
        </div>
      </div>
    </header>
  );
}
