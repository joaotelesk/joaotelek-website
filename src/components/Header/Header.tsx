// Components
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { MenuMob } from "./MenuMob/MenuMob";
import { Navbar } from "./NavBar/NavBar";

// Utilities
import clsx from "clsx";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

// Hooks
import { useState } from "react";
import { useRouter } from "next/router";

// Interfaces
export interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function handleClick() {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header
        className={clsx(
          "w-full py-4 bg-black-300 boxHeader flex justify-center items-center px-5 desktop:px-0",
          className
        )}
      >
        <div className=" w-full flex justify-between items-center desktop:w-5/6">
          <Link href="https://joaotelesk.tech/">
            <Logo size={36} className="text-white-400 font-semibold text-lg" />
          </Link>
          <Button
            icon={GiHamburgerMenu}
            role="button"
            size={26}
            aria-label="button de abrir o menu"
            className="bg-black-300 border-none desktop:hidden"
            colorNormal="text-purple-500"
            colorHover="text-purple-500"
            onClick={handleClick}
          />
          {menuOpen && <MenuMob close={handleClick} />}

          <Navbar className="hidden desktop:flex space-x-10  " />
          <div className="hidden desktop:flex gap-2">
            <Link href="https://www.linkedin.com/in/joaotelesk" target="_blank">
              <Button
                role="button"
                aria-label="clique me para linkedin"
                type="button"
                icon={GrLinkedinOption}
                size={22}
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
                size={22}
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
                size={22}
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
                size={22}
                className="btn-secondary"
                colorNormal="text-purple-500"
                colorHover="text-white-500"
              />
            </Link>
            <Button
              icon={FaTelegramPlane}
              className="btn-primary "
              role="button"
              aria-label="button de entrar na pagina de contato"
              onClick={() => router.push("/contato")}
            >
              <p className="text-sm text-bold">Contato</p>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
