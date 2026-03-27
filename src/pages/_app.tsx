import { type AppType } from "next/app";
import { Geist } from "next/font/google";

import "~/styles/globals.css";

const geist = Geist({
  subsets: ["latin"],
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={geist.className}>
      <link
        rel="icon"
        href="https://artist-page-images-32345.s3.eu-north-1.amazonaws.com/Prints/favicon.ico"
        sizes="any"
      />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
