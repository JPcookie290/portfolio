import React from "react";
import Image from "next/image";
import { IProject } from "../interfaces/Project";

type ProjectCardProps = {
  project: IProject;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="border p-4 m-4">
      <Image
        src={project.image}
        alt={project.title}
        width={400} // Adjust width as needed
        height={300} // Adjust height as needed
        objectFit="cover"
        layout="responsive"
      />
      <h3 className="text-xl mt-2">{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
