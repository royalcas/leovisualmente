import { ProjectImage } from './../../portfolio/portfolio/models/portfolio';
import { Component, OnInit, Input, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input()
  images: ProjectImage[];
  active = 0;
  constructor() {}

  ngOnInit() {}

  goToImage(index: number) {
    this.active = Math.min(Math.max(index, 0), this.images.length -1);
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.goToImage(this.active + 1);
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.goToImage(this.active - 1);
    }
  }
}
