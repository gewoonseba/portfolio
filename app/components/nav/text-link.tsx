import classNames from "classnames";
import Link from "next/link";

export default function TextLink({
  type,
  href,
  label,
  asSpan = false,
  className,
}: {
  type: "backward" | "forward" | "external";
  href: string;
  label: string;
  asSpan?: boolean;
  className?: string;
}) {
  const baseClasses = classNames(
    "text-secondary underline decoration-dotted underline-offset-2",
    "transition-all duration-150",
    "hover:text-primary hover:decoration-solid",
    className,
  );
  const classes =
    type === "external"
      ? `${baseClasses} whitespace-nowrap`
      : `${baseClasses} uppercase-tight leading-none`;

  const getContent = () => {
    switch (type) {
      case "backward":
        return `← ${label}`;
      case "forward":
        return `${label} →`;
      case "external":
        return `${label} ↗`;
      default:
        return label;
    }
  };

  const content = getContent();
  const isExternal = type === "external";

  if (asSpan) {
    return (
      <span className={classes} aria-label={label}>
        {content}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {content}
    </Link>
  );
}
