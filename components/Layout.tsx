import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomHead from "./CustomHead";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomHead title={title} />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
