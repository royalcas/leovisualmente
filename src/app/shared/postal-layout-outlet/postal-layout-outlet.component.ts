import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postal-layout-outlet',
  template: `
  <app-postal-layout>
    <app-postal-content>
      <router-outlet></router-outlet>
    </app-postal-content>
  </app-postal-layout>
  `,
})
export class PostalLayoutOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
