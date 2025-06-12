import classNames from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "icon" | "menu" | "text" | "primary";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

export function BaseButton({ 
  variant = "icon", 
  size = "md",
  className,
  children,
  ...props 
}: BaseButtonProps) {
  const variantClasses = {
    icon: "hover:bg-btn-secondary-hover active:bg-btn-secondary-hover transition-colors duration-150",
    menu: "hover:bg-btn-secondary-hover transition-colors duration-150",
    text: "hover:text-primary transition-colors duration-150",
    primary: "bg-primary text-primary-inverse hover:bg-primary-hover transition-colors duration-150"
  };

  const sizeClasses = {
    sm: "size-8",
    md: "size-10",
    lg: "size-12"
  };

  const isIconVariant = variant === "icon" || variant === "menu";

  return (
    <button
      className={classNames(
        "flex shrink-0 items-center justify-center rounded-md",
        variantClasses[variant],
        isIconVariant && sizeClasses[size],
        isIconVariant && "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}