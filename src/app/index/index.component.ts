import { mergeMap } from 'rxjs/operators';
import { Observable, BehaviorSubject, timer } from 'rxjs';
import { PortfolioService } from './../portfolio/portfolio/services/portfolio.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  gettingCards = false;
  @ViewChild('shuffleCardsVideo',{ static: true } ) videoComponent: ElementRef<HTMLVideoElement>;

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
    this.gettingCards = true;
    this.showCards = true;
  }

  playVideo() {
    this.videoComponent.nativeElement.muted = true;
    this.videoComponent.nativeElement.play();
  }

  getMoreCards() {
    this.showCards = false;
    
    timer(1000).subscribe(() => {
      this.requestCards$.next(true);
      this.showCards = true;
    });
  }

}
