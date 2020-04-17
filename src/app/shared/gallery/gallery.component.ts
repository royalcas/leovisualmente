import { ProjectImage, ContentType } from './../../portfolio/portfolio/models/portfolio';
import { Component, OnInit, Input, HostListener, EventEmitter, Output } from '@angular/core';

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
  @Output()
  selected = new EventEmitter<{index: number, image: ProjectImage}>();
  @Input()
  images: ProjectImage[];
  active = 0;
  contentTypes = ContentType;

  constructor() {}

  ngOnInit() {
    this.emitSelectedImage();
  }

  emitSelectedImage() {
    this.selected.emit({index: this.active, image: this.images[this.active]});
  }

  goToImage(index: number) {
    this.active = Math.min(Math.max(index, 0), this.images.length - 1);
    this.emitSelectedImage();
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
