import Link from "next/link";
import { useRouter } from "next/router";
import { TelegramLogo } from "phosphor-react";
import { Button } from "../../Button/Button";
import { CardImg } from "../../CardImg/CardImg";
import { Heading } from "../../Heading/Heading";
import { Navbar } from "../NavBar/NavBar";

interface MenuMobProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuMob({ close }: MenuMobProps) {
  const router = useRouter();
  function handleClick() {
    close(false);
  }
  return (
    <>
      <div className="fixed top-0 right-0 h-screen w-screen bg-black-300  z-200 transform transition-transform duration-5000 ease-in-out ">
        <div className="flex flex-col px-5 py-5">
          <div className="flex justify-between mb-10 items-center">
            <Heading size="sm" className="font-bold">
              Menu
            </Heading>
            <Button
              role="button"
              aria-label="button de fechar o menu"
              className="font-bold text-lg bg-black-300 border-none rounded-2xl text-purple-500 bg-tran"
              onClick={handleClick}
            >
              X
            </Button>
          </div>
          <Navbar className="flex flex-col w-full gap-10" text-center />
        </div>
        <div className=" flex w-screen  tablet:flex-row justify-between items-center desktop:flex flex-col  mt-20 gap-4">
          <Button
            role="button"
            aria-label="button de entrar na pagina de contato"
            className="w-7/12 table:w-full"
            onClick={() => router.push("")}
          >
            <p className="text-lg text-bold ">Contato</p>
            <TelegramLogo size={24} />
          </Button>
          <div className="flex gap-2">
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
          </div>
        </div>
        ;
      </div>
    </>
  );
}
