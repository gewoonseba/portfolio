import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksVariant = "default" | "mobile-menu";

export default function NavLinks({
  className,
  onNavClicked,
  variant = "default",
}: {
  className?: string;
  onNavClicked?: () => void;
  variant?: NavLinksVariant;
}) {
  const paths = [
    { path: "/", label: "Design" },
    { path: "/photos", label: "Photos" },
  ];

  const pathname = usePathname();

  // Variant-specific styles
  const variantStyles = {
    default: {
      nav: "flex items-center gap-4 md:justify-self-start",
      link: "text-base",
    },
    "mobile-menu": {
      nav: "flex flex-col items-start gap-6",
      link: "text-2xl",
    },
  };

  const currentVariant = variantStyles[variant];

  return (
    <nav className={classNames(currentVariant.nav, className)}>
      {paths.map(({ path, label }) => (
        <Link
          key={path}
          href={path}
          onClick={onNavClicked}
          className={classNames(
            "hover:text-primary relative uppercase transition-all duration-200 ease-out",
            currentVariant.link,
            pathname === path ? "text-primary" : "text-secondary",
          )}
        >
          {label}
          <span
            className={classNames(
              "bg-primary-inverse absolute inset-x-0 top-[48%] block h-0.5 transition-all duration-200",
              pathname === path ? "max-w-full" : "max-w-0",
            )}
          ></span>
        </Link>
      ))}
    </nav>
  );
}
