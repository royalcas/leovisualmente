import { Observable } from 'rxjs';
import { PortfolioService } from './../portfolio/portfolio/services/portfolio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from '../portfolio/portfolio/models/portfolio';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  cards$: Observable<IProject[]>;
  showCards = false;

  constructor(private router: Router, private service: PortfolioService) { }

  ngOnInit() {
    this.cards$ = this.service.getRandomProjects(3);
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

}
