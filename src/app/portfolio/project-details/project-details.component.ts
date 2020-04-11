import { CfHtmlPipe } from './../../shared/pipes/cf-html.pipe';
import { PortfolioService } from './../portfolio/services/portfolio.service';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../portfolio/models/portfolio';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project$: Observable<IProject>;

  constructor(private route: ActivatedRoute, private service: PortfolioService, private htmlParser: CfHtmlPipe) { }

  ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap(paramMap => {
        return this.service.getProjectById(paramMap.get('id'));
      }),
      map((project) => {
        return {...project, description: this.htmlParser.transform(project.description)};
      })
    );
  }

}
