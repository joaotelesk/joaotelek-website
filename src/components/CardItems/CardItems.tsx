// Components
import { Heading } from "../Heading/Heading";
import { CardImg } from "../CardImg/CardImg";
import Link from "next/link";

// Utilities
import clsx from "clsx";

// Interfaces
export interface CarItemsPros {
  className?: string;
  title: string;
  urlImg?: string;
  urlSite: string;
  urlGithub?: string | null;
  urlFigma?: string | null;
  slug: string;
}

export function CardItems({
  className,
  title,
  urlImg,
  urlSite,
  urlFigma,
  urlGithub,
  slug,
}: CarItemsPros) {
  return (
    <>
      <div
        className={clsx(
          "bg-black-300 rounded text-start w-[280px] h-auto flex flex-col justify-between elemento",
          className
        )}
      >
        <img
          src={`${urlImg}`}
          alt={title}
          className="w-full h-48 bg-black-200 rounded mb-3"
          width="192"
          height="280"
        />

        <Heading size="sm" className="mx-4 mb-3">
          {title}
        </Heading>
        <div className="flex gap-3 justify-center mb-5">
          {urlGithub ? (
            <Link href={urlGithub}>
              <CardImg
                className="w-[75px]"
                src="/github.svg"
                size={36}
                title="GitHub"
                alt="logo github"
              />
            </Link>
          ) : (
            ""
          )}
          {urlFigma ? (
            <Link href={`${urlFigma}`}>
              <CardImg
                className="w-[75px]"
                src="/figma.svg"
                size={36}
                title="Figma"
                alt="logo figma"
              />
            </Link>
          ) : (
            ""
          )}
          <Link href={urlSite}>
            <CardImg
              className="w-[75px]"
              src="/google.svg"
              size={36}
              title="Site"
              alt="logo google"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
