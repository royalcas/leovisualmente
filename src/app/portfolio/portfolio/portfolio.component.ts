import { DialogGalleryComponent } from './../../shared/dialog-gallery/dialog-gallery.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { Observable, Subject } from 'rxjs';
import { IProject } from './models/portfolio';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: IProject[];
  tags$ = new Subject<string[]>();
  portfolioItems$: Observable<unknown>;

  constructor(
    private portfolioService: PortfolioService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>{
        return this.portfolioService.getProjectsByCategory(params.get('categoryId'));
    })).subscribe(items => {
      this.portfolioItems = items;
    });
  }

}
