import React from "react";
import Layout from "../../components/Layout";
import fs from "fs";
import path from "path";
import ProjectCard from "../../components/ProjectCard";
import { IProject } from "../../interfaces/Project";

type Props = {
  projects: IProject[];
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "lib/data/projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: IProject[] = JSON.parse(jsonData);

  return {
    props: {
      projects,
    },
  };
};

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <Layout title="Projects">
      <div className="p-4">
        <h2>Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
