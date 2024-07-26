import React from "react";
import { AppProps } from "next/app";
import Page from "../components/Page";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default MyApp;
