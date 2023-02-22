// Components
import Head from "next/head";
import Image from "next/image";
import { Button } from "../src/components/Button/Button";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";

// Hooks
import { useRouter } from "next/router";

// Utilities
import { FaTelegramPlane } from "react-icons/fa";
import { BsFileEarmarkArrowDown } from "react-icons/bs";

export default function Home() {
  const router = useRouter();
  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=12PTariDJ_T6x4qYIy8EJ4W2hJKRJyFAd",
      "_blank"
    );
  };
  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Início</title>
        <meta name="description" content="Pagina incial do site" />
      </Head>
      <div className="">
        <main className="w-full flex flex-col items-center">
          <section
            className="hidden desktop:flex w-full min-h-[75vh]
          imagem-de-fundo bg-right flex justify-center gap-5 "
          >
            <div className=" w-5/6 flex flex-col gap-5">
              <div className="w-[633px]">
                <Heading size="lg" className="text-white-500 font-bold mt-16 ">
                  Me chamo João Teles{" "}
                  <span className="animate-waving hand-wave z-10">👋</span> ,
                  sou <span className="gradient">Desenvolvedor Full-Stack</span>{" "}
                  e <span className="text-purple-500">UI/UX</span>
                </Heading>
              </div>
              <div className="w-[552px] mb-2">
                <Text size="lg" className="font-regular text-white-300">
                  Com ênfase em desenvolvimento web. Utilizo metodologia baseada
                  em TDD, acessibilidade e SEO para criar soluções inovadoras e
                  testáveis.
                </Text>
              </div>
              <div className="w-[151px]">
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
          </section>
          <section className="hidden desktop:flex w-full min-h-[90vh] bg-purple-500 flex flex-col items-center">
            <div className="bg-white-500 rounded w-5/6 h-[202px] relative top-[-101px] py-10 px-32 flex justify-between items-center">
              <div className="fle flex-col items-center text-center">
                <Heading size="lg" className="text-black-500 font-bold">
                  +3
                </Heading>

                <Text size="lg" className="text-purple-500 font-bold ">
                  Clientes satisfeitos
                </Text>
              </div>
              <div className="h-3/5 w-1 bg-purple-500 rounded" />
              <div className="fle flex-col items-center text-center">
                <Heading size="lg" className="text-black-500 font-bold">
                  +21
                </Heading>
                <Text size="lg" className="text-purple-500 font-bold">
                  Projetos
                </Text>
              </div>
              <div className="h-3/5 w-1 bg-purple-500 rounded" />
              <div className="fle flex-col items-center text-center">
                <Heading size="lg" className="text-black-500 font-bold">
                  +1
                </Heading>
                <Text size="lg" className="text-purple-500 font-bold">
                  Ano de experiência
                </Text>
              </div>
            </div>
            <Heading size="lg" className="text-white-500 font-semibold">
              Serviços
            </Heading>
            <div className="flex gap-20 mt-16">
              <div className="w-[390px] h-[300px] bg-white-400 rounded-[52px] flex flex-col items-center px-2 py-2">
                <Image
                  src="/desenvolvimento.png"
                  width="230"
                  height="168"
                  alt="imagem de desenvolviemnto de software"
                  className="relative top-[-90px]"
                />
                <div className="relative top-[-90px] text-center">
                  <Heading size="sm" className="text-purple-500 font-bold mb-4">
                    Desenvolvimento Web
                  </Heading>

                  <Text size="lg">
                    Com mais de 1 ano de experiência em programar e desenvolver
                    soluções web, utilizando React JS, Next.js, Redux,
                    Redux-saga, Typescript, Node.js, HTML5, CSS, SASS, Tailwind,
                    Styled-Component, Nest.js, Docker.
                  </Text>
                </div>
              </div>
              <div className="w-[390px] h-[300px] bg-white-400 rounded-[52px] flex flex-col items-center px-2 py-2">
                <Image
                  src="/ui.png"
                  width="230"
                  height="160"
                  alt="imamgem de UI/UX"
                  className="relative top-[-90px]"
                />
                <div className="relative top-[-90px] text-center">
                  <Heading size="sm" className="text-purple-500 font-bold mb-4">
                    UI/UX
                  </Heading>

                  <Text size="lg">
                    Orientado a detalhes e um profissional inovador, equipado
                    com a habilidade de transformar informações complexas e
                    conceitos em design acessível e elegante.
                  </Text>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full min-h-screen  desktop:w-5/6 mt-5 flex desktop:mt-16 ">
            <div className="flex imagem-de-fundo  bg-top  flex-col w-full items-center desktop:w-2/5 desktop:flex-col  desktop:bg-none">
              <div className="w-32 h-32 desktop:w-64 desktop:h-64 rounded-full">
                <Image
                  width="270"
                  height="270"
                  src="/profile.png"
                  alt="imagem profile"
                />
              </div>
              <div className="w-4/5 flex flex-col items-center gap-3 desktop:hidden">
                <Heading size="sm" className="text-white-500 font-bold mt-2 ">
                  Me chamo João Teles{" "}
                  <span className="animate-waving hand-wave z-10">👋</span> ,
                  sou <span className="gradient">Desenvolvedor Full-Stack</span>{" "}
                  e <span className="text-purple-500">UI/UX</span>
                </Heading>

                <Text size="md" className="font-regular text-white-300">
                  Com ênfase em desenvolvimento web. Utilizo metodologia baseada
                  em TDD, acessibilidade e SEO para criar soluções inovadoras e
                  testáveis.
                </Text>

                <Text size="md" className="font-regular text-white-300">
                  Atualmente, estou à procura de uma oportunidade para trabalhar
                  como desenvolvedor júnior ou estagiário, onde possa aplicar
                  todos os meus conhecimentos e continuar evoluindo em minha
                  carreira.
                </Text>
                <div className="w-44  mb-5">
                  <Button
                    size={20}
                    icon={BsFileEarmarkArrowDown}
                    className="btn-primary"
                    onClick={handleDownload}
                  >
                    Currículo
                  </Button>
                </div>
              </div>
            </div>
            <div className="hidden desktop:flex flex-col w-3/5 ">
              <Heading size="lg" className="text-white-500 text-center">
                Sobre
              </Heading>
              <div className="mt-10 px-10 flex flex-col gap-5">
                <Text size="lg" className="text-white-300 font-normal">
                  Me chamo João Teles, sou desenvolvedor Full-Stack e UX/UI com
                  ênfase em desenvolvimento web, utilizando tecnologias como
                  JavaScript, TypeScript, React, Next e Node. Utilizo
                  metodologia baseada em TDD, acessibilidade e SEO para
                  desenvolver soluções inovadoras e estáveis.
                </Text>
                <Text size="lg" className="text-white-300 font-normal">
                  Atualmente, estou à procura de uma oportunidade para trabalhar
                  como desenvolvedor júnior ou estagiário, onde possa aplicar
                  todos os meus conhecimentos e continuar evoluindo em minha
                  carreira.
                </Text>
                <div className="w-44  ">
                  <Button
                    size={20}
                    icon={BsFileEarmarkArrowDown}
                    className="btn-primary "
                    onClick={handleDownload}
                  >
                    Currículo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
