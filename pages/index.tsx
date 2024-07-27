import React from "react";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout title="Home | My Portfolio">
      <div className="p-4">
        <h2>Welcome to my portfolio</h2>
        <p>This is the home page.</p>
      </div>
    </Layout>
  );
};

export default Home;
