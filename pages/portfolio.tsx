// Components
import Head from "next/head";
import { CardItems } from "../src/components/CardItems/CardItems";
import { Heading } from "../src/components/Heading/Heading";
import { Text } from "../src/components/Text/Text";
import { Skeleton } from "@mui/material";

// Utilities
import { useGetProjectsQuery } from "../src/graphql/generated";

export default function Portfolio() {
  const { data, loading, error } = useGetProjectsQuery();

  return (
    <>
      <Head>
        <title>João Teles - Full-Stack | Portfólio</title>
        <meta name="description" content="Pagina de contato" />
      </Head>

      <div className="flex flex-col items-center mt-20 mb-5 ">
        <main className="flex min-h-[80vh] flex-col w-4/5  gap-10 items-center ">
          <div className="flex flex-col gap-5 desktop:w-3/4 justify-center items-center ">
            <Heading className="text-center mb-5 text-white-500 font-bold  text-md desktop:text-2xl">
              Portfólio
            </Heading>
            <Text className="text-white-300 desktop:text-md">
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
            <Text className="text-white-300 desktop:text-md">
              Sinta-se à vontade para explorar meu portfólio e entre em contato
              comigo se tiver alguma dúvida ou quiser discutir uma possível
              colaboração!
            </Text>
          </div>

          <div className="flex flex-wrap gap-8 text-center justify-center items-center  px-3">
            {loading ? (
              <>
                <Skeleton animation="wave" width={280} height={430} />
                <Skeleton animation="wave" width={280} height={430} />
                <Skeleton animation="wave" width={280} height={430} />
                <Skeleton animation="wave" width={280} height={430} />
              </>
            ) : (
              data?.projects?.map((project) => (
                <CardItems
                  key={project.id}
                  title={project.title}
                  urlFigma={project.urlFigma}
                  urlImg={`https://drive.google.com/uc?id=${project.urlImg}`}
                  urlGithub={project.urlGithub}
                  urlSite={project.urlSite}
                  slug={project.slug}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}
