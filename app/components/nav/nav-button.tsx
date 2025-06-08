import Link from "next/link";

export default function NavButton({
  direction,
  href,
  label,
  asSpan = false,
}: {
  direction: "backward" | "forward";
  href: string;
  label: string;
  asSpan?: boolean;
}) {
  const className =
    "text-secondary underline uppercase-tight decoration-dotted underline-offset-2 hover:text-primary text-sm leading-none transition-all duration-150 group-hover:decoration-solid hover:decoration-solid";
  const content = direction === "backward" ? `← ${label}` : `${label} →`;

  if (asSpan) {
    return (
      <span className={className} aria-label={label}>
        {content}
      </span>
    );
  }

  return (
    <Link href={href} className={className} aria-label={label}>
      {content}
    </Link>
  );
}
