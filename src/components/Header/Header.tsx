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
          "w-full px-5 py-5 bg-black-300 flex items-center justify-between mb-10 boxHeader  left-0",
          className
        )}
      >
        <Logo size={36} className="text-white-400 font-bold text-md " />
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
            <CardImg alt="logo linkedin" src="/linkedin-purple.svg" />
          </Link>
          <Link href="https://github.com/joaotelesk">
            <CardImg alt="logo github" src="/github-purple.svg" />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5585988277110">
            <CardImg alt="logo whatsapp" src="/whatsapp-purple.svg" />
          </Link>
          <Link href="https://discord.gg/cDK55jn6">
            <CardImg alt="logo discord" src="/discord-purple.svg" />
          </Link>
          <Button
            role="button"
            aria-label="button de entrar na pagina de contato"
            onClick={() => router.push("")}
          >
            <p className="text-lg text-bold">Contato</p>
            <TelegramLogo size={24} />
          </Button>
        </div>
      </header>
    </>
  );
}
