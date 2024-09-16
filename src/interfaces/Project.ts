export interface IProject {
  id: string;
  title: string;
  intro: string;
  description: string;
  mainImage: string;
  images: string[];
  links?: string[];
  technologies: string[];
}
