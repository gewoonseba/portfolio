import classNames from "classnames";
import Link from "next/link";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className }: ContactButtonProps) => {
  return (
    <Link
      href="mailto:seba@gewoonseba.com?subject=Hi%20👋"
      className={classNames(
        "h-8 rounded-full border border-primary px-2 text-center align-middle transition-all text-md hover:bg-primary-inverse hover:text-on-light active:bg-primary-inverse active:text-on-light",
        className,
      )}
    >
      <span className="inline-flex h-full items-center text-primary hover:text-primary-inverse">Contact</span>
    </Link>
  );
};
// 