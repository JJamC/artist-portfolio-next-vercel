import { type AppType } from "next/app";
import { Geist } from "next/font/google";
import Head from "next/head";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/public/favicon2.ico" />
      </Head>

      <div className={geist.className}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
