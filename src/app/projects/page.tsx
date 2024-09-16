"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { IProject } from "../../interfaces/Project";
import { getProjects } from "../../lib/util/projects";

export default function Projects() {
  const allProjects: IProject[] = getProjects();

  const visibleProjects = allProjects.slice(0, 6);
  const remainingProjects = allProjects.slice(6);

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < remainingProjects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {visibleProjects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      {remainingProjects.length > 0 && (
        <div className="block md:hidden">
          {remainingProjects.map((project) => (
            <Link
              className="w-full mb-8"
              key={project.id}
              href={`/projects/${project.id}`}
            >
              <ProjectCard project={project} />
            </Link>
          ))}
        </div>
      )}

      {remainingProjects.length > 0 && (
        <div className="hidden md:block relative">
          <h3 className="text-xl font-bold mb-4">More Projects</h3>

          <div className="relative w-full overflow-hidden">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
              disabled={currentIndex === 0}
            >
              &larr;
            </button>

            <div
              className="flex transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${remainingProjects.length * 100}%`,
              }}
            >
              {remainingProjects.map((project) => (
                <Link
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4"
                  key={project.id}
                  href={`/projects/${project.id}`}
                >
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 p-2 rounded-full z-10"
              disabled={currentIndex === remainingProjects.length - 1}
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
