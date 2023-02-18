// Components
import Link from "next/link";
import { Button } from "../../Button/Button";
import { Heading } from "../../Heading/Heading";
import { Navbar } from "../NavBar/NavBar";

// Utilities
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaDiscord, FaTelegramPlane } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

// Hooks
import { useRouter } from "next/router";

// interfaces
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
      <div className=" h-screen w-screen bg-black-300 fixed right-0 top-0 z-200">
        <div className="flex flex-col px-5 py-5">
          <div className="flex justify-between mb-10 items-center">
            <Heading size="sm" className="font-bold">
              Menu
            </Heading>
            <Button
              role="button"
              aria-label="button de fechar o menu"
              className=" bg-black-300 border-none rounded-2xl  bg-tran"
              onClick={handleClick}
              icon={MdOutlineClose}
              size={26}
              colorNormal="text-purple-500"
              colorHover="text-purple-500"
            />
          </div>
          <Navbar className="flex flex-col w-full gap-10" />
        </div>
        <div className=" w-full  flex flex-col  mt-20 gap-4 items-center">
          <Button
            role="button"
            icon={FaTelegramPlane}
            aria-label="button de entrar na pagina de contato"
            className="btn-primary"
            onClick={() => router.push("/contato")}
          >
            <p className="text-lg text-bold ">Contato</p>
          </Button>
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/joaotelesk" target="_blank">
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
        </div>
        ;
      </div>
    </>
  );
}
