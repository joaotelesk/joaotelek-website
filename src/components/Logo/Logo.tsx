// Components
import Image from "next/image";

// Interfaces
export interface LogoProps {
  size: number;
  className?: string;
}

export function Logo({ size, className }: LogoProps) {
  return (
    <>
      <div className="flex items-center gap-2">
        <Image alt="Logo do site" src="/logo.svg" height={size} width={size} />
        <span className={className}>João Teles</span>
      </div>
    </>
  );
}
