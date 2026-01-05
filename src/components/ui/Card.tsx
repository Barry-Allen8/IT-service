import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "card",
        hover && "hover:transform hover:-translate-y-1 transition-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
