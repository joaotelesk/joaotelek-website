import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { client } from "../src/lib/apollo";
import { Leyout } from "../src/components/Leyout/Leyout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Leyout>
        <Component {...pageProps} />
      </Leyout>
    </ApolloProvider>
  );
}
