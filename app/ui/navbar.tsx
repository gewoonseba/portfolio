"use client";

import { LogoSmall } from "@/app/ui/logo-small";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import classNames from "classnames";
import ContactButton from "@/app/ui/contact-button";

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
    <div className={classNames("p-4", className)}>
      <div
        className={classNames(
          "rounded-4 px-4 backdrop-blur-xl",
          "animate-border-appear",
          "[animation-timeline:scroll()] [animation-range:0px_50px]"
        )}
      >
        <nav className="flex h-14 flex-row content-center">
          <div className="my-auto basis-1/3">
            <Link href="/">
              <LogoSmall />
            </Link>
          </div>
          <div className="my-auto flex basis-1/3 justify-center">
            {paths.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={clsx(
                  "group relative p-5 uppercase transition-all duration-300 ease-out hover:text-neutral-100",
                  { "text-neutral-200": pathname !== path },
                  { "text-neutral-100": pathname === path },
                )}
              >
                {label}
                <span
                  className={clsx(
                    "h-0.5 absolute inset-x-5 top-[2.9rem] block max-w-0 bg-neutral-100 transition-all duration-300",
                    { "max-w-full": pathname === path },
                  )}
                ></span>
              </Link>
            ))}
          </div>
          <div className="my-auto mr-0 flex basis-1/3 justify-end">
            <ContactButton />
          </div>
        </nav>
      </div>
    </div>
  );
}
