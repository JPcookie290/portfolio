import React from "react";
import Head from "next/head";

type CustomHeadProps = {
  title: string;
};

const CustomHead: React.FC<CustomHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title} | My Portfolio</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default CustomHead;
