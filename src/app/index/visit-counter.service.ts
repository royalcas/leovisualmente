import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {

  constructor() { }

  getNumberOfVisits() {
    return +localStorage.getItem('number-visits') || 0;
  }

  increaseNumberOfVisits() {
    const newNumberOfVisits = this.getNumberOfVisits() + 1;
    return localStorage.setItem('number-visits', `${newNumberOfVisits}`);
  }
}
