// Components
import Image from "next/image";
import { Slot } from "@radix-ui/react-slot";

// Utilities
import clsx from "clsx";

// Interfaces
export interface CardImgProps {
  size?: number;
  asChild?: boolean;
  title?: string;
  src: string;

  alt: string;
  className?: string;
}

export function CardImg({
  size = 24,
  asChild,
  title,
  src,
  alt,
  className,
}: CardImgProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <>
      <Comp
        type="button"
        className={clsx(
          "group bg-black-200 rounded px-3 py-3 font-bold w-auto h-auto  text-xs text-white-500 flex flex-col items-center justify-center ",
          className
        )}
      >
        <Image src={src} alt={alt} width={size} height={size} />
        {title ? <span className="mt-2">{title}</span> : ""}
      </Comp>
    </>
  );
}
