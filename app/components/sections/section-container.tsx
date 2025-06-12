import classNames from "classnames";

interface SectionContainerProps {
  children: React.ReactNode;
  spacing?: "default" | "large" | "small";
  className?: string;
  as?: "section" | "div" | "article";
}

export function SectionContainer({ 
  children, 
  spacing = "default",
  className,
  as: Component = "section"
}: SectionContainerProps) {
  const spacingClasses = {
    default: "space-y-10",
    large: "space-y-20",
    small: "space-y-6"
  };

  return (
    <Component className={classNames(
      "w-full",
      spacingClasses[spacing],
      className
    )}>
      {children}
    </Component>
  );
}