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

      <div className="flex flex-col items-center justify-between h-screen w-full">
        <Header className="mb-5" />

        <main className="flex flex-col w-4/5  gap-16 items-center ">
          <div className="flex flex-col gap-5 desktop:w-3/4 justify-center items-center ">
            <Heading size="lg" className="text-center ">
              Portfólio
            </Heading>
            <Text size="lg" className="text-white-400 ">
              As linguagens e ferramentas que eu mais gosto de utilizar são:
              Next.js, React JS, Redux, Redux-saga, Typescript, Node.js, HTML5,
              CSS, Tailwind, Styled-componet, SASS, Nest.js, Docker, Graphql.
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

        <Footer className="mt-5" />
      </div>
    </>
  );
}
