import React from "react";
import Image from "next/image";
import { IProject } from "../../../interfaces/Project";
import { getProjectById } from "../../../lib/util/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProjectGallery from "./ProjectGallery";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

const technologyIcons: { [key: string]: string } = {
  javascript: "/icons/icons8-javascript.svg",
  react: "/icons/icons8-react.svg",
  typescript: "/icons/icons8-typescript.svg",
  "next.js": "/icons/icons8-next.js.svg",
  mysql: "/icons/icons8-mysql-96.png",
  php: "/icons/icons8-php-color-96.png",
  vite: "/icons/icons8-vite.svg",
  wordpress: "/icons/icons8-wordpress.svg",
  python: "/icons/icons8-python.svg",
  java: "/icons/icons8-java-96.svg",
};

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const project: IProject | undefined = await getProjectById(params.id);

  if (!project) {
    return notFound();
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">{project.title}</h1>

      <div className="relative mb-6 h-[50vh] overflow-hidden rounded-lg">
        <Image
          src={project.mainImage}
          alt={project.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 pr-6">
          <p className="text-lg leading-relaxed mb-6">{project.description}</p>

          <ProjectGallery images={project.images} />

          <h3 className="text-2xl font-bold mt-8 mb-4">Technologies Used</h3>
          <div className="flex space-x-4">
            {project.technologies.map((tech) => (
              <div key={tech} className="text-center">
                <Image
                  src={technologyIcons[tech]}
                  alt={tech}
                  width={32}
                  height={32}
                  className="inline-block"
                />
                <p className="text-xs mt-1">{tech}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md h-auto min-h-[100px] flex-shrink-0">
          <h3 className="text-2xl font-bold mb-4">Project Links</h3>
          <ul className="space-y-4">
            {project.links?.map((link, index) => (
              <li key={index}>
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  {link.includes("github") ? "GitHub" : "Live Site"}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
