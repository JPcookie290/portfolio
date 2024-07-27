import React from "react";
import Layout from "../../components/Layout";

const About: React.FC = () => {
  return (
    <Layout title="About">
      <div className="p-4">
        <h2>About Me</h2>
        <p>This is the about page.</p>
      </div>
    </Layout>
  );
};

export default About;
