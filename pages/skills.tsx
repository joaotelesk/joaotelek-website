// Components
import Head from "next/head";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";
import { CardImg } from "../src/components/CardImg/CardImg";

export default function Skills() {
  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Skills</title>
        <meta name="description" content="Pagina de skills" />
      </Head>
      <div className="containerPage">
        <Header className="mb-5" />
        <main className="w-5/6 flex flex-wrap mb-5 justify-between">
          <div className="pr-0 flex flex-col gap-5 w-full mb-10 desktop:w-2/4  desktop:pr-12 ">
            <Heading
              size="lg"
              className="mb-5 text-center text-white-500 font-bold"
            >
              Skills
            </Heading>

            <Text size="lg" className="text-white-300 font-normal">
              Atuo como Desenvolvedor Full-Stack, mas meu campo de maior
              expertise é o Front-End, no qual seleciono os melhores frameworks
              e ferramentas para usar em meus projetos.
            </Text>
            <Text size="lg" className="text-white-300 font-normal">
              - Front-End:
              <p>
                HTML, CSS, JavaScript, React, Next, Typescript, React Hooks,
                Redux, Redux Toolkit, Styled-Component, Sass, Tailwind e
                GraphQL.
              </p>
            </Text>
            <Text size="lg" className="text-white-300 font-normal">
              - Back-End:
              <p>
                Node.js, Express, MongoDB, Mongoose, Sequelize e PostgreSQL.
              </p>
            </Text>
            <Text size="lg" className="text-white-300 font-normal">
              - Outras Ferramentas:
              <p>Docker, Jest, Git e Figma</p>
            </Text>
          </div>

          <div className=" w-auto flex gap-3 px-3 justify-start flex-wrap  desktop:w-2/4 ">
            <CardImg
              className="w-[100px] h-[100px]"
              src="/html5.svg"
              size={50}
              title="HTML"
              alt="logo html"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/css.svg"
              size={50}
              title="CSS"
              alt="logo css"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/js.svg"
              size={50}
              title="JavaScript"
              alt="logo javascript"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/ts.svg"
              size={50}
              title="TypeScript"
              alt="logo typescript"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/react.svg"
              size={50}
              title="React.js"
              alt="logo react"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/next.svg"
              size={50}
              title="Next.js"
              alt="logo next"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/sass.svg"
              size={50}
              title="SASS"
              alt="logo sass"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/tailwind.png"
              size={50}
              title="Tailwind"
              alt="logo tailwind"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/redux.svg"
              size={50}
              title="Redux"
              alt="logo redux"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/node.svg"
              size={50}
              title="Node.js"
              alt="logo node"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/postgre.svg"
              size={50}
              title="PostgreSQL"
              alt="logo postgresql"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/mongodb.svg"
              size={50}
              title="MongoDb"
              alt="logo mongodb"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/graphql.png"
              size={50}
              title="GraphQL"
              alt="logo graphql"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/jest.png"
              size={50}
              title="Jest"
              alt="logo jest"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/docker.svg"
              size={50}
              title="Docker"
              alt="logo docker"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/git.svg"
              size={50}
              title="Git"
              alt="logo git"
            />
            <CardImg
              className="w-[100px] h-[100px]"
              src="/figma.svg"
              size={50}
              title="Figma"
              alt="logo figma"
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
