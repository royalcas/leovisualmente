export interface ProjectImage {
  url: string;
  title: string;
  description: string;
}


export interface IProject {
  id: number;
  thumbnail: ProjectImage;
  images: ProjectImage[];
  tags?: string[];
  projectName: string;
  description: string;
}
