import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postal-layout',
  templateUrl: './postal-layout.component.html',
  styleUrls: ['./postal-layout.component.scss']
})
export class PostalLayoutComponent implements OnInit {

  @Input() showMenu = true;

  constructor() { }

  ngOnInit() {
  }

}
