import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";
import Head from "next/head";

const twitterHandle = "@d__raptis";
export default function App({ Component, pageProps }: AppProps) {
  return (
   <>
    <Head>
      <meta key="og_site_name" property="og:site_name" content="Muzammil Blog" />
        <meta key="og_locale" property="og:locale" content="en_IE" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="og_image:width" property="og:image:width" content="1200" />
        <meta key="og_image:height" property="og:image:height" content="630" /> <meta key="twitter:site" name="twitter:site" content={twitterHandle} />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content={twitterHandle}
        />
        <meta key="og_type" property="og:type" content="website" />
    </Head>
    <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
   </>
  );
}
