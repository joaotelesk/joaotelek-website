// Components
import Head from "next/head";
import { Footer } from "../src/components/Footer/Footer";
import { Form } from "../src/components/Form/Form";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";
import { Button } from "../src/components/Button/Button";

// Utilities
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

export default function Contato() {
  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Contato</title>
        <meta name="description" content="Pagina de contato" />
      </Head>
      <div className="flex flex-col items-center justify-between h-screen w-full">
        <Header className="mb-5" />
        <main className="w-5/6 flex flex-wrap  mb-5 justify-between ">
          <div className="pr-0 flex flex-col gap-10 w-full mb-10 desktop:w-2/4  desktop:pr-12 ">
            <Heading size="lg" className="mb-10 text-center ">
              Contato
            </Heading>
            <Text size="lg" className="text-white-300 font-normal">
              Eu estou disponível para trabalhar em seus projetos -
              especialmente projetos ambiciosos ou grandes. Não hesite se tiver
              alguma pergunta.
            </Text>
            <div className="flex items-center gap-4">
              <Button
                aria-label="endreço de a-mail"
                icon={HiOutlineMail}
                colorNormal="text-purple-500"
                colorHover="text-purple-500"
                className="btn-secondary cursor-none hover:bg-black-200"
              ></Button>
              <Text size="md" className="text-white-200">
                joaojoseteles@gmailcom
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <Button
                aria-label="endreço de a-mail"
                icon={RiWhatsappFill}
                colorNormal="text-purple-500"
                colorHover="text-purple-500"
                className="btn-secondary cursor-none hover:bg-black-200"
              ></Button>
              <Text className="text-white-200" size="md">
                +55 85 98827-7110
              </Text>
            </div>
          </div>

          <Form className="w-full desktop:w-1/2" />
        </main>
        <Footer />
      </div>
    </>
  );
}
