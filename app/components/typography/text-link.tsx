import Link from "next/link";

export default function TextLink({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      className="hover:text-primary whitespace-nowrap underline decoration-dotted transition-all duration-150 hover:decoration-solid"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label + " ↗"}
    </Link>
  );
}
