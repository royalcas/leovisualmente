import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input()
  images: string[];
  active = 0;
  constructor() {}

  ngOnInit() {}
  goToImage(index: number) {
    this.active = index;
  }
}
