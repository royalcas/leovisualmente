import { mergeMap, tap } from 'rxjs/operators';
import { IProject, ProjectImage } from './../../portfolio/portfolio/models/portfolio';
import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/environments/environment';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export enum ContentTypes {
  projects = 'project',
}

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  private cdaClient = createClient(environment.contentfulConfig);

  getProjects(query?: object): any {
    return from(
      this.cdaClient.getEntries({
        ...Object,
        content_type: ContentTypes.projects,
        query
      })
    ).pipe(
      map(posts => this.cdaClient.parseEntries(posts.items)),
      tap(console.log),
      map((posts: any) => posts.map((project: any) => this.mapProject(project)))
    );
  }
  getPost(id: string): any {
    return from(this.cdaClient.getEntry(id));
  }


  mapProject(item: any): IProject {
    const project: IProject = {
      description: item.fields.description,
      id: item.fields.url,
      projectName: item.fields.name,
      images: item.fields.images.filter(image => image).map((image) => this.mapImage(image)),
      thumbnail: item.fields.thumbnail && this.mapImage(item.fields.thumbnail, true),
      category: item.fields.category && item.fields.category.fields.name.toLocaleLowerCase()
    };

    return project;
  }


  mapImage(imageData: any, isThumb: boolean = false): ProjectImage {
    const image: ProjectImage =  {
      url: isThumb ? this.getThumbnailUrl(imageData.fields.file.url) : this.getGalleryImgUrl(imageData.fields.file.url),
      description: imageData.fields.description,
      title: imageData.fields.title,
      contentType: imageData.fields.file.contentType
    };

    return image;
  }

  getGalleryImgUrl(imageUrl: string): string {
    const height = window.screen.height;
    return `${imageUrl}?h=${height}`;
  }

  getThumbnailUrl(originalUrl: string): string {
    return `${originalUrl}?h=500&w=300&fit=thumb`;
  }
}
