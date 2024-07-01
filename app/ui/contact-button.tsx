import classNames from "classnames";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({className}: ContactButtonProps) => {
  return (
    <a
      href="mailto:gewoonseba@gmail.com?subject=Hi%20👋"
      className={classNames(
        "rounded-full border border-neutral-100 px-2 py-1 text-[1.8rem] transition-all hover:bg-neutral-100 hover:text-neutral-900",
        className,
      )}
    >
      Contact
    </a>
  );
};
