import React from "react";
import Image from "next/image";
import { IProject } from "../interfaces/Project";

const technologyIcons: { [key: string]: string } = {
  javascript: "/icons/icons8-javascript.svg",
  react: "/icons/icons8-react.svg",
  typescript: "/icons/icons8-typescript.svg",
  "next.js": "/icons/icons8-next.js.svg",
  mysql: "/icons/icons8-mysql-96.png",
  php: "/icons/icons8-php-colo-96.png",
  vite: "/icons/icons8-vite.svg",
  wordpress: "/icons/icons8-wordpress.svg",
  python: "/icons/icons8-python.svg",
  java: "/icons/icons8-java-96.svg",
};

type ProjectCardProps = {
  project: IProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="relative">
        <Image
          src={project.mainImage}
          alt={project.title}
          width={400}
          height={300}
          className="object-cover w-full h-64"
        />
        <h3 className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-xl font-bold">
          {project.title}
        </h3>
      </div>

      <div className="p-4">
        <p className="text-md text-gray-700 mb-4">{project.intro}</p>

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
    </div>
  );
}
