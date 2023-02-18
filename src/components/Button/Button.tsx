// Components
import { Slot } from "@radix-ui/react-slot";
import { IconType } from "react-icons/lib";

// Utilities
import clsx from "clsx";
import React, { ButtonHTMLAttributes, ReactNode, useState } from "react";

// Interfaces
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
  icon?: IconType;
  size?: number;
  colorNormal?: string;
  colorHover?: string;
}

export function Button({
  children,
  asChild,
  className,
  icon: Icon,
  size = 20,
  colorHover = "text-white-500",
  colorNormal = "text-white-500",
  ...props
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const Comp = asChild ? Slot : "button";
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <Comp
      className={clsx(
        "transition-all duration-300 ease-in-out items-center ",

        className
      )}
      {...props}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children ? children : ""}
      {Icon ? (
        <Icon
          size={size}
          className={clsx(
            `transition-all duration-300 ease-in-out ${
              hover ? colorHover : colorNormal
            }`
          )}
        />
      ) : (
        ""
      )}
    </Comp>
  );
}
