import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Image from "next/image";
import { IProject } from "../../../interfaces/Project";

type ProjectPageProps = {
  project: IProject;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title} | My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="p-4">
        <h1 className="text-2xl mb-4">{project.title}</h1>
        <div className="mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            objectFit="cover"
            layout="responsive"
          />
        </div>
        <p>{project.description}</p>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), "lib/data/projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects: IProject[] = JSON.parse(jsonData);

  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
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
