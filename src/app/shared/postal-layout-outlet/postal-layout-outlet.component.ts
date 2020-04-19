import { slideInAnimation } from './../animations/route-animations';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-postal-layout-outlet',
  template: `
  <app-postal-layout>
    <app-postal-content [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </app-postal-content>
  </app-postal-layout>
  `,
  animations: [
    slideInAnimation
  ]
})
export class PostalLayoutOutletComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.url.pipe(
      tap(console.log)
    ).subscribe();
  }

  prepareRoute(outlet: RouterOutlet) {
    return window.location.href.split('/').pop();
  }
}
