// Components
import { Slot } from "@radix-ui/react-slot";

// Utilities
import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

// Interfaces
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,

  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "bg-purple-500 rounded px-[18px] py-[10px] font-normal  text-sm text-white-500 flex items-center gap-4 w-auto justify-center",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
