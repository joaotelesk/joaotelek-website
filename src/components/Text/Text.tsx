// Components
import { Slot } from "@radix-ui/react-slot";

// Utilities
import clsx from "clsx";
import { ReactNode } from "react";

// Interfaces
export interface TextProps {
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Text({ size = "md", children, asChild, className }: TextProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx(
          {
            "text-xs": size === "sm",
            "text-sm": size === "md",
            "text-md": size === "lg",
          },
          className
        )}
      >
        {children}
      </Comp>
    </>
  );
}
