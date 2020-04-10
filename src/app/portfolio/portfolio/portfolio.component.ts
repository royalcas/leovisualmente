import { DialogGalleryComponent } from './../../shared/dialog-gallery/dialog-gallery.component';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PortfolioService } from './services/portfolio.service';
import { Observable, Subject } from 'rxjs';
import { IProject } from './models/portfolio';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems: IProject[];
  tags$ = new Subject<string[]>();

  constructor(
    private portfolioService: PortfolioService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.portfolioService.getProjects().subscribe(items => {
      this.portfolioItems = items;
    });
  }

  changeTags(tags: string[]) {
    this.portfolioService.filterPortfolio(tags).subscribe(items => {
      this.portfolioItems = items;
    });
  }

  openGalleryDialog(item: IProject) {
    const dialogData = this.portfolioService.getItemGalleryInfo(item);
    this.dialog.open(DialogGalleryComponent, {
      width: '100vw',
      height: '100vh',
      data: dialogData
    });
  }
}
