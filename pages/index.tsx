import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className="p-4">
        <h2>Welcome to my portfolio</h2>
        <p>This is the about me page.</p>
      </div>
    </Layout>
  );
};

export default Home;
