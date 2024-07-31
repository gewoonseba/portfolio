import classNames from "classnames";
import Link from "next/link";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className }: ContactButtonProps) => {
  return (
    <Link
      href="mailto:gewoonseba@gmail.com?subject=Hi%20👋"
      className={classNames(
        "~text-base/md h-8 rounded-full border border-neutral-100 px-2 text-center align-middle transition-all hover:bg-neutral-100 hover:text-neutral-900 active:bg-neutral-100 active:text-neutral-900",
        className,
      )}
    >
      <span className="inline-flex h-full items-center">Contact</span>
    </Link>
  );
};
