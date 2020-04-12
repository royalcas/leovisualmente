import { PortfolioService } from './../portfolio/portfolio/services/portfolio.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostersService {

  constructor(private portfolio: PortfolioService) { }

  getPosters() {
    return this.portfolio.getProjectsByCategory('posters').pipe(
      map(projects => projects[0])
    );
  }
}
