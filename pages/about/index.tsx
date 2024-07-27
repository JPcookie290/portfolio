import React from "react";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>About | My Portfolio</title>
      </Head>
      <div className="p-4">
        <h2>About Me</h2>
        <p>This is the about page.</p>
      </div>
    </>
  );
};

export default About;
