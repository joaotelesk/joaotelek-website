// Components
import Head from "next/head";
import { CardItems } from "../src/components/CardItems/CardItems";
import { Footer } from "../src/components/Footer/Footer";
import { Form } from "../src/components/Form/Form";
import { Header } from "../src/components/Header/Header";
import { useGetProjectsQuery } from "../src/graphql/generated";
import Skeleton from "@mui/material/Skeleton";

export default function Teste() {
  const { data, loading, error } = useGetProjectsQuery();
  if (loading) {
    // substituindo o conteúdo com o Skeleton enquanto o conteúdo é carregado
    return (
      <>
        <Head>
          <title>Pagina Teste</title>
          <meta
            name="description"
            content="Pagina de teste de responsividade dos componentes"
          />
        </Head>
        <div className="flex flex-col items-center justify-between h-screen w-full">
          <Header className="mb-10" />
          <div className="flex flex-wrap gap-8 text-center justify-center items-center mb-40 px-3">
            {[...Array(4)].map(
              (
                _,
                index // renderizando Skeletons
              ) => (
                <Skeleton
                  key={index}
                  variant="rectangular"
                  width={280}
                  height={355}
                />
              )
            )}
          </div>

          <div className="mx-4">
            <Form />
          </div>

          <Footer className="mt-10" />
        </div>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>Pagina Teste</title>
        <meta
          name="description"
          content="Pagina de teste de responsividade dos componentes"
        />
      </Head>
      <div className="flex flex-col items-center justify-between h-screen w-full">
        <Header className="mb-10" />
        <div className="flex flex-wrap gap-8 text-center justify-center items-center mb-40 px-3">
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

        <div className="mx-4">
          <Form />
        </div>

        <Footer className="mt-10" />
      </div>
    </>
  );
}
