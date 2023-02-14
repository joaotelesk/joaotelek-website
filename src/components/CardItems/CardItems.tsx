// Components
import { Heading } from "../Heading/Heading";
import { CardImg } from "../CardImg/CardImg";
import Link from "next/link";

// Utilities
import clsx from "clsx";

// Interfaces
export interface CarItemsPros {
  className?: string;
}

export function CardItems({ className }: CarItemsPros) {
  return (
    <>
      <div
        className={clsx(
          "bg-black-300 rounded text-start w-[280px] h-auto flex flex-col justify-between elemento ",
          className
        )}
      >
        <div className="w-full h-48 bg-black-200 rounded mb-3 bg-[url('/logo.svg')] bg-no-repeat bg-center " />
        <Heading size="sm" className="mx-4 mb-3">
          Titulo
        </Heading>
        <div className="flex gap-3 justify-center mb-5">
          <Link href={""}>
            <CardImg
              className="w-[75px]"
              src="/github.svg"
              size={36}
              title="GitHub"
              alt="logo github"
            />
          </Link>
          <Link href={""}>
            <CardImg
              className="w-[75px]"
              src="/figma.svg"
              size={36}
              title="Figma"
              alt="logo figma"
            />
          </Link>
          <Link href={""}>
            <CardImg
              className="w-[75px]"
              src="/google.svg"
              size={36}
              title="Google"
              alt="logo google"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
