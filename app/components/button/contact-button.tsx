import classNames from "classnames";
import Link from "next/link";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className }: ContactButtonProps) {
  return (
    <Link
      href="mailto:seba@gewoonseba.com?subject=Hi%20👋"
      className={classNames(
        "border-primary text-md hover:bg-primary-inverse hover:text-on-light active:bg-primary-inverse active:text-on-light h-8 rounded-full border px-2 text-center align-middle transition-all",
        className,
      )}
    >
      <span className="text-primary hover:text-primary-inverse inline-flex h-full items-center">
        Contact
      </span>
    </Link>
  );
}
//
