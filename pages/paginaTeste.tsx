// Components
import Head from "next/head";
import { CardItems } from "../src/components/CardItems/CardItems";
import { Footer } from "../src/components/Footer/Footer";
import { Form } from "../src/components/Form/Form";
import { Header } from "../src/components/Header/Header";

export default function Teste() {
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
        <Header />
        <div className="flex flex-wrap gap-8 text-center justify-center items-center mb-40 px-3">
          <CardItems />
          <CardItems />
          <CardItems />
          <CardItems />
        </div>

        <div className="mx-4">
          <Form onSubmit={() => {}} />
        </div>
        <Footer className="mt-10" />
      </div>
    </>
  );
}
