import { ContentfulService } from './../../../shared/services/contentful.service';
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import { IProject } from "../models/portfolio";
import { IDialogGalleryModel } from "../../../shared/dialog-gallery/idialog-gallery.model";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  constructor(private contentful: ContentfulService) {}

  getProjects(): Observable<IProject[]> {
    return this.contentful.getProjects().pipe(
      map((data: IProject[]) => data.sort((a, b) => b.id - a.id))
    );
  }

  filterPortfolio(selectedTags: string[]): Observable<IProject[]> {
    return this.getProjects().pipe(
      map(data =>
        data.filter(item => {
          if (!selectedTags || selectedTags.length === 0) {
            return data;
          }

          return item.tags.some(tag => selectedTags.includes(tag));
        })
      )
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
