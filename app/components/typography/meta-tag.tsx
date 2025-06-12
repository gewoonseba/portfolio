import classNames from "classnames";

interface MetaTagProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
}

export function MetaTag({ children, className, align = "left" }: MetaTagProps) {
  return (
    <p className={classNames(
      "text-secondary uppercase-tight",
      align === "right" && "text-right",
      align === "center" && "text-center",
      className
    )}>
      {children}
    </p>
  );
}