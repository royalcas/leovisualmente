import { SafeHtml } from '@angular/platform-browser';
export interface ProjectImage {
  url: string;
  title: string;
  description: string;
}


export interface IProject {
  id: string;
  thumbnail: ProjectImage;
  category?: string;
  images: ProjectImage[];
  tags?: string[];
  projectName: string;
  description: string | SafeHtml;
}
