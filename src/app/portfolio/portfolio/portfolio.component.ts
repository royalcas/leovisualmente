import { DialogGalleryComponent } from './../../shared/dialog-gallery/dialog-gallery.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { Observable, Subject } from 'rxjs';
import { IProject } from './models/portfolio';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: IProject[];
  tags$ = new Subject<string[]>();
  portfolioItems$: Observable<unknown>;
  currentCategory: string;

  categoryOrder = [
    'spades',
    'diamonds',
    'clubs',
    'hearths',
    'duck',
  ];

  constructor(
    private portfolioService: PortfolioService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params) => params.get('categoryId')),
      tap((category) => this.currentCategory = category),
      switchMap((cat: string) => {
        return this.portfolioService.getProjectsByCategory(cat);
      }),
      ).subscribe(items => {
        this.portfolioItems = items;
      }
    );
  }

  goNextCategory() {
    const currentCategoryIndex = this.categoryOrder.indexOf(this.currentCategory);
    this.goToCategory(this.categoryOrder[currentCategoryIndex + 1]);
  }

  goPreviousCategory() {
    const currentCategoryIndex = this.categoryOrder.indexOf(this.currentCategory);

    if (currentCategoryIndex === 0) {
      return;
    }

    this.goToCategory(this.categoryOrder[currentCategoryIndex - 1]);
  }

  goToCategory(category: string) {
    if (category === 'duck') {
      this.router.navigate(['/duck']);
      return;
    }
    this.router.navigate(['/my-work', category]);
  }

}
