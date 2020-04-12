import { mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { PortfolioService } from './../portfolio/portfolio/services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '../portfolio/portfolio/models/portfolio';
import { VisitCounterService } from './visit-counter.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  cards$: Observable<IProject[]>;
  showCards = false;
  visits: number;
  requestCards$ = new BehaviorSubject<{}>(null);

  constructor(private router: Router, private service: PortfolioService, private visitCounter: VisitCounterService) {
    this.visitCounter.increaseNumberOfVisits();
  }

  ngOnInit() {
    this.visits = this.visitCounter.getNumberOfVisits();
    this.cards$ = this.requestCards$.pipe(mergeMap(() => this.service.getRandomProjects(3)));
  }

  goToSite() {
    this.router.navigate(['/my-work', 'spades']);
  }

  goToPosters() {
    this.router.navigate(['/posters']);
  }

  getCards() {
    this.showCards = true;
  }

  getMoreCards() {
    this.requestCards$.next(true);
  }

}
