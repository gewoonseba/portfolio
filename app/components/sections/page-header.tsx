import AutoSizedText from "@/app/components/typography/auto-sized-text";
import classNames from "classnames";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  subtitleAlign?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ 
  title, 
  subtitle, 
  subtitleAlign = "right",
  className,
  children 
}: PageHeaderProps) {
  return (
    <div className={classNames("pt-10 pb-20", className)}>
      <AutoSizedText>
        <h1 className="heading-tighter">{title}</h1>
      </AutoSizedText>
      {subtitle && (
        <p className={classNames(
          "text-secondary uppercase-tight",
          subtitleAlign === "right" ? "text-right" : "text-left"
        )}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}