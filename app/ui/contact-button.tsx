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
        "h-8 rounded-full border border-neutral-100 px-2 text-center align-middle text-[1.8rem] transition-all hover:bg-neutral-100 hover:text-neutral-900",
        className,
      )}
    >
      <span className="inline-flex h-full items-center pb-0.5">Contact</span>
    </Link>
  );
};
