// Components
import Head from "next/head";
import { Footer } from "../src/components/Footer/Footer";
import { Form } from "../src/components/Form/Form";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Button } from "../src/components/Button/Button";

// Utilities
import { RiWhatsappFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Text } from "../src/components/Text/Text";

export default function Contato() {
  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Contato</title>
        <meta name="description" content="Pagina de contato" />
      </Head>
      <div className="flex flex-col items-center mt-20">
        <main className="w-5/6  min-h-[80vh] flex flex-wrap mb-5 justify-between">
          <div className="pr-0 h-5/6 flex flex-col gap-5 w-full mb-4 desktop:w-2/4  desktop:pr-12 ">
            <Heading className="mb-3 text-center text-white-500 font-bold text-md desktop:text-2xl">
              Contato
            </Heading>

            <Text className="text-white-300 font-normal desktop:text-md">
              Fique à vontade para entrar em contato comigo através desta
              página. Se você tiver alguma pergunta sobre meu trabalho,
              projetos, habilidades ou experiência, ficarei feliz em responder.
              Além disso, se você estiver procurando por um desenvolvedor para
              um novo projeto, ficarei feliz em discutir possíveis colaborações.
            </Text>
            <Text className="text-white-300 font-normal desktop:text-md">
              Para entrar em contato, basta preencher o formulário nesta página
              com suas informações e a mensagem que deseja enviar. Prometo
              responder o mais rápido possível. Além disso, você também pode
              encontrar meus perfis nas redes sociais e me enviar uma mensagem
              por lá, se preferir.
            </Text>
            <div className="flex items-center gap-4">
              <Button
                aria-label="endreço de a-mail"
                icon={HiOutlineMail}
                colorNormal="text-purple-600"
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

          <Form className="w-full  h-5/6 desktop:w-2/4" />
        </main>
      </div>
    </>
  );
}
