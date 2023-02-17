// Components
import Image from "next/image";
import Link from "next/link";
import { TelegramLogo } from "phosphor-react";
import { Button } from "../Button/Button";
import { CardImg } from "../CardImg/CardImg";
import { Logo } from "../Logo/Logo";
import { MenuMob } from "./MenuMob/MenuMob";
import { Navbar } from "./NavBar/NavBar";

// Utilities
import clsx from "clsx";

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
          "w-full py-5 bg-black-300 boxHeader flex justify-center items-center px-5 desktop:px-0",
          className
        )}
      >
        <div className=" w-full flex justify-between items-center desktop:w-5/6">
          <Logo size={36} className="text-white-400 font-semibold text-lg" />
          <Button
            role="button"
            aria-label="button de abrir o menu"
            className="bg-black-300 border-none desktop:hidden"
            onClick={handleClick}
          >
            <Image src="/menu.svg" alt="iamgem menu" width={36} height={36} />
          </Button>
          {menuOpen && <MenuMob close={handleClick} />}

          <Navbar className="hidden desktop:flex space-x-10  " />
          <div className="hidden desktop:flex gap-2">
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
              <CardImg alt="logo discord" src="/discord-purple.svg" size={20} />
            </Link>
            <Button
              role="button"
              aria-label="button de entrar na pagina de contato"
              onClick={() => router.push("")}
            >
              <p className="text-sm text-bold">Contato</p>
              <TelegramLogo size={20} />
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
