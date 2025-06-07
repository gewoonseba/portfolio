import Link from "next/link";

export interface LinkButtonProps {
  label: string;
  url: string;
}

export const LinkButton = ({ label, url }: LinkButtonProps) => {
  return (
    <Link
      href={url}
              className="uppercase tracking-tight text-primary transition-all duration-150 text-base hover:text-primary hover:underline"
    >
      {`${label} ↗`}
    </Link>
  );
};
