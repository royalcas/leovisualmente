import { IProject } from './../models/portfolio';
import { ContentfulService } from './../../../shared/services/contentful.service';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, mergeMap, shareReplay } from "rxjs/operators";
import { IDialogGalleryModel } from "../../../shared/dialog-gallery/idialog-gallery.model";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private projects$: Observable<IProject[]>;
  constructor(private contentful: ContentfulService) {}

  getProjects(): Observable<IProject[]> {

    if (this.projects$) {
      return this.projects$;
    }
    this.projects$ = this.contentful.getProjects().pipe(
      shareReplay(1)
    );

    return this.projects$;
  }

  getRandomProjects(quantity: number) {
    return this.getProjects().pipe(
      map(projects =>  projects.sort(() => Math.random() - 0.5).slice(0, quantity))
    );
  }

  getProjectsByCategory(categoryId: string): Observable<IProject[]> {
    return this.getProjects().pipe(
      map((projects) => projects.filter(project => project.category === categoryId)),
    );
  }

  getProjectById(id: string): Observable<IProject> {
    return this.getProjects().pipe(
      map((projects) => projects.find(project => project.id === id)),
    );
  }

  getItemGalleryInfo(item: IProject): IDialogGalleryModel {
    return {
      title: item.projectName,
      description: item.description,
      images: item.images.map(image => image.url),
      tags: item.tags
    };
  }
}
