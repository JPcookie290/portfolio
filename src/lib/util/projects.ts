import projects from "../data/projects.json";

export const getProjects = () => {
  return projects;
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
