import styles from "../styles/home.module.scss";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className={styles.container}>
        <img src="/logo.jpeg" alt="logo" className={styles.logo} />

        <p className={styles.title}>
          <strong>Nosso site </strong> será lançado em breve!
        </p>
        <span className={styles.subTitles}>
          Estamos trabalhando para criar a melhor experiência para você.
        </span>

        <span className={styles.description}>
          Enquanto isso, nos siga nas redes sociais.
        </span>
        <div className={styles.imgLink}>
          <Link href="https://github.com/joaotelesk" target="_blank">
            <img src="/github.svg" alt="imagem github" className={styles.img} />
          </Link>
          <Link href="https:www.linkedin.com/in/joaotelesk" target="_blank">
            <img
              src="/linkedin.svg"
              alt="imagem linkedin"
              className={styles.img}
            />
          </Link>
        </div>
        <footer className={styles.footer}>&copy; 2023 - joaoteslesk</footer>
      </main>
    </>
  );
}
