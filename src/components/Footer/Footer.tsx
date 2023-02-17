// Components
import Link from "next/link";
import { CaretUp } from "phosphor-react";
import { Button } from "../Button/Button";
import { CardImg } from "../CardImg/CardImg";
import { Text } from "../Text/Text";

// Utilities
import clsx from "clsx";

// interfaces
export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  //w-full flex justify-between items-center desktop:w-5/6"
  return (
    <>
      <footer
        className={clsx(
          "bg-black-300 w-full h-24  flex flex-col items-center",
          className
        )}
      >
        <div className="w-full h-2 bg-gradient-to-r from-green-500 via-blue-500  via-purple-600 to-pink-200"></div>
        <div className=" w-full  flex justify-center items-center py-5  px-5 h-auto desktop:w-5/6 desktop:px-0">
          <div className="flex w-auto justify-between items-center desktop:w-full tablet:w-full">
            <div className="hidden desktop:flex gap-2 ">
              <Link href="https://www.linkedin.com/in/joaotelesk">
                <CardImg
                  alt="logo linkedin"
                  src="/linkedin-purple.svg"
                  size={20}
                />
              </Link>
              <Link href="https://github.com/joaotelesk">
                <CardImg alt="logo github" src="/github-purple.svg" size={20} />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=5585988277110">
                <CardImg
                  alt="logo whatsapp"
                  src="/whatsapp-purple.svg"
                  size={20}
                />
              </Link>
              <Link href="https://discord.gg/cDK55jn6">
                <CardImg
                  alt="logo discord"
                  src="/discord-purple.svg"
                  size={20}
                />
              </Link>
            </div>
            <Text className="text-md mobile:text-xs mt-2 text-center">
              Copyright 2023 <span className="text-purple-500">{"<"}</span>
              joaotelesk<span className="text-purple-500">{"/>"}</span> - Todos
              os direitos reservados
            </Text>
            <div className="hidden tablet:block">
              <Button
                role="button"
                aria-label="clique me"
                type="button"
                className="bg-black-200"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <CaretUp size={20} color="black" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
