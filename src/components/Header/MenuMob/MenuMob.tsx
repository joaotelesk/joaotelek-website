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
import { motion } from "framer-motion";

// Hooks
import { useRouter } from "next/router";

// interfaces
interface MenuMobProps {
  close: () => void;
  isOpen: boolean;
}

export function MenuMob({ close, isOpen }: MenuMobProps) {
  const router = useRouter();

  function handleClick() {
    setTimeout(() => {
      close();
    }, 500);
  }

  const menu = {
    open: { translateX: 0 },
    closed: { translateX: "100%" },
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit={{ x: "-100" }}
        variants={menu}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`h-screen w-screen bg-black-300 fixed right-0 top-0 z-20`}
      >
        <div className="flex flex-col px-5 py-5">
          <div className="flex justify-between mb-10 items-center">
            <Heading size="sm" className="font-bold text-white-500">
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
        <div className=" w-screen  flex flex-col  mt-20 gap-2 items-center">
          <Button
            role="button"
            icon={FaTelegramPlane}
            aria-label="button de entrar na pagina de contato"
            className="btn-primary w-20"
            onClick={() => router.push("/contato")}
          >
            Contato
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
      </motion.div>
    </>
  );
}
