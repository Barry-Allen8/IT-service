import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const classes = cn(
      "btn",
      {
        "btn-primary": variant === "primary",
        "btn-secondary": variant === "secondary",
        "btn-outline": variant === "outline",
        "bg-transparent hover:bg-gray-100": variant === "ghost",
        "px-4 py-2 text-sm": size === "sm",
        "px-6 py-3": size === "md",
        "px-8 py-4 text-lg": size === "lg",
      },
      className
    );

    if (asChild && children) {
      return cloneElement(children as ReactElement, {
        className: cn((children as ReactElement).props.className, classes),
        ...props,
      });
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
