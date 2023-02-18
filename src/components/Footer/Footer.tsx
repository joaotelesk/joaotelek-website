// Components
import Link from "next/link";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import clsx from "clsx";

// Utilities
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaDiscord } from "react-icons/fa";
import { RiArrowUpSLine } from "react-icons/ri";

// interfaces
export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
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
              <Link
                href="https://www.linkedin.com/in/joaotelesk"
                target="_blank"
              >
                <Button
                  role="button"
                  aria-label="clique me para linkedin"
                  type="button"
                  icon={GrLinkedinOption}
                  size={20}
                  className="btn-secondary"
                  colorNormal="text-purple-500"
                  colorHover="text-white-500"
                />
              </Link>
              <Link href="https://github.com/joaotelesk" target="_blank">
                <Button
                  role="button"
                  aria-label="clique me para github"
                  type="button"
                  icon={AiFillGithub}
                  size={20}
                  className="btn-secondary"
                  colorNormal="text-purple-500"
                  colorHover="text-white-500"
                />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5585988277110"
                target="_blank"
              >
                <Button
                  role="button"
                  aria-label="clique me para whatsapp"
                  type="button"
                  icon={FaWhatsapp}
                  size={20}
                  className="btn-secondary"
                  colorNormal="text-purple-500"
                  colorHover="text-white-500"
                />
              </Link>
              <Link href="https://discord.gg/cDK55jn6" target="_blank">
                <Button
                  role="button"
                  aria-label="clique me para discord"
                  type="button"
                  icon={FaDiscord}
                  size={20}
                  className="btn-secondary"
                  colorNormal="text-purple-500"
                  colorHover="text-white-500"
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
                aria-label="clique me para subir"
                type="button"
                className="btn-secondary hover:bg-black-300"
                icon={RiArrowUpSLine}
                colorHover="text-white-200"
                size={20}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
