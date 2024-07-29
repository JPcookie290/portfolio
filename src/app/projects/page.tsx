import React from "react";

import ProjectCard from "../../components/ProjectCard";
import { IProject } from "../../interfaces/Project";

import { getProjects } from "../../lib/util/projects";

export default async function Projects() {
  const data: IProject[] = getProjects();
  return (
    <div className="p-4">
      <h2>Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
