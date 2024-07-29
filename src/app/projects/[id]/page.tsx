import React from "react";
import Image from "next/legacy/image";
import { IProject } from "../../../interfaces/Project";
import { getProjectById } from "../../../lib/util/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project: IProject | undefined = getProjectById(params.id);

  if (!project) {
    return notFound();
  }

  return (
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
      {project.link && <Link href={project.link}>Learn more</Link>}
    </div>
  );
};

export default ProjectPage;
