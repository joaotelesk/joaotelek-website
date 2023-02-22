// Components
import Head from "next/head";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";

export default function Servicos() {
  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Serviços</title>
        <meta name="description" content="Pagina de serviços" />
      </Head>

      <div className="flex flex-col items-center mt-5 mb-10">
        <main className="flex flex-col w-4/5 gap-10 items-center ">
          <div className="flex flex-col gap-5 desktop:w-3/4 justify-center items-center ">
            <Heading className="text-center mb-5 text-white-500 font-bold text-md desktop:text-2xl">
              Serviços
            </Heading>
            <Text className="text-white-300  desktop:text-md">
              Bem-vindo à minha página de serviços, onde você encontrará uma
              visão geral dos serviços que ofereço como desenvolvedor. Ofereço
              soluções personalizadas para atender às necessidades do seu
              projeto, seja ele de pequena ou grande escala. Meus serviços
              incluem desenvolvimento web, desenvolvimento de comércio
              eletrônico, integração de sistemas e consultoria em tecnologia.
            </Text>
          </div>
          <div className="flex flex-wrap gap-8 text-center justify-center items-center  px-2">
            <div className="border-card">
              <div className="card">
                <Heading
                  size="md"
                  className="mb-6 text-white-500 font-semibold"
                >
                  Página Única
                </Heading>
                <Text size="md" className="text-white-300 font-normal">
                  Desenvolvo todas as páginas para seu lançamento ou perpétuo. E
                  também crio páginas para divulgar serviços, como essa daqui,
                  inclusive pode ter um menu âncora.
                </Text>
              </div>
            </div>
            <div className="border-card">
              <div className="card">
                <Heading className="mb-6 text-white-500 font-semibold">
                  Site Institutional
                </Heading>
                <Text size="md" className="text-white-300 font-normal">
                  Se você tem uma empresa ou simplesmente presta serviço, estar
                  presente na internet hoje em dia é obrigatório! Um site
                  institucional vai aumentar as suas vendas e divulgação.
                </Text>
              </div>
            </div>
            <div className="border-card">
              <div className="card">
                <Heading className="mb-6 text-white-500 font-semibold">
                  Plataformas EAD
                </Heading>
                <Text className="text-white-300 font-normal">
                  Precisa de uma plataforma EAD que seja a sua cara e não quer
                  ficar pagando um valor mensal por isso? Desenvolvo a sua área
                  de membros com Node.js.
                </Text>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
