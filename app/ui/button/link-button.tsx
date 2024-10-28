import Link from "next/link";

export interface LinkButtonProps {
  label: string;
  url: string;
}

export const LinkButton = ({ label, url }: LinkButtonProps) => {
  return (
    <Link
      href={url}
      className="uppercase tracking-tight text-neutral-100 transition-all duration-150 ~text-sm/base hover:text-neutral-100 hover:underline"
    >
      {`${label} ↗`}
    </Link>
  );
};
