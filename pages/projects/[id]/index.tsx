import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import Layout from "../../../components/Layout";
import Image from "next/legacy/image";
import { IProject } from "../../../interfaces/Project";

type Props = {
  project: IProject;
};

const ProjectPage: React.FC<Props> = ({ project }) => {

  return (
    <Layout title={project.title}>
      <div className="p-4">
        <h1 className="text-2xl mb-4">{project.title}</h1>
        <div className="mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <p>{project.description}</p>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "lib/data/projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: IProject[] = JSON.parse(jsonData);

  const paths = projects.map((project) => ({
    params: { id: project.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const filePath = path.join(process.cwd(), "lib/data/projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: IProject[] = JSON.parse(jsonData);
  const project = projects.find((p) => p.id.toString() === id);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
