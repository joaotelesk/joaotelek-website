// Components
import Head from "next/head";
import { CardItems } from "../src/components/CardItems/CardItems";
import { Footer } from "../src/components/Footer/Footer";
import { Header } from "../src/components/Header/Header";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";

// Utilities
import { useGetProjectsQuery } from "../src/graphql/generated";

export default function Portfolio() {
  const { data, error } = useGetProjectsQuery();

  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Portfólio</title>
        <meta name="description" content="Pagina de contato" />
      </Head>

      <div className="containerPage">
        <Header className="mb-5" />

        <main className="flex flex-col w-4/5  gap-10 items-center ">
          <div className="flex flex-col gap-5 desktop:w-3/4 justify-center items-center ">
            <Heading
              size="lg"
              className="text-center mb-5 text-white-500 font-bold"
            >
              Portfólio
            </Heading>
            <Text size="lg" className="text-white-300 ">
              Bem-vindo à minha página de portfólio! Aqui você encontrará uma
              seleção dos meus projetos mais recentes e relevantes.
              <p>
                Ao clicar em qualquer um dos projetos, você será levado para uma
                página detalhada, com informações mais específicas sobre o
                projeto, incluindo objetivos, tecnologias utilizadas, desafios e
                soluções encontradas ou se preferir basta clicar em um dos links
                disponiveis no card do projeto.
              </p>
            </Text>
            <Text size="lg" className="text-white-300 ">
              Sinta-se à vontade para explorar meu portfólio e entre em contato
              comigo se tiver alguma dúvida ou quiser discutir uma possível
              colaboração!
            </Text>
          </div>

          <div className="flex flex-wrap gap-8 text-center justify-center items-center  px-3">
            {data?.projects?.map((project) => (
              <CardItems
                key={project.id}
                title={project.title}
                urlFigma={project.urlFigma}
                urlImg={`https://drive.google.com/uc?id=${project.urlImg}`}
                urlGithub={project.urlGithub}
                urlSite={project.urlSite}
                slug={project.slug}
              />
            ))}
          </div>
        </main>

        <Footer className="mt-10" />
      </div>
    </>
  );
}
