import React from "react";
import Layout from "./Layout";

const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default Page;
