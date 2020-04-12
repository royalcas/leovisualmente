import { SafeHtml } from '@angular/platform-browser';

export enum ContentType {
  jpeg = 'image/jpeg',
  png = 'image/png',
  mp4 = 'video/mp4',
}

export interface ProjectImage {
  url: string;
  title: string;
  description: string;
  contentType: ContentType;
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
