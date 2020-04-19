import { ProjectImage, ContentType } from './../../../portfolio/portfolio/models/portfolio';
import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-media-display',
  templateUrl: './media-display.component.html',
  styleUrls: ['./media-display.component.scss']
})
export class MediaDisplayComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() image: ProjectImage;
  @Input() active = false;
  @ViewChild('videoElement', { static: false }) videoElement: ElementRef<HTMLVideoElement>;

  contentTypes = ContentType;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.videoElement || !this.videoElement.nativeElement) {return; }

    if (changes.active.previousValue && !changes.active.currentValue) {
      this.videoElement.nativeElement.pause();
    }

    if (!changes.active.previousValue && changes.active.currentValue) {
      this.videoElement.nativeElement.currentTime = 0;
      this.videoElement.nativeElement.play();
    }
    if (changes.active.isFirstChange() && changes.active.currentValue) {
      this.videoElement.nativeElement.currentTime = 0;
      if (!this.videoElement || !this.videoElement.nativeElement) {return; }
    }
  }

  ngAfterViewInit(): void {
    if (!this.videoElement || !this.videoElement.nativeElement) {return; }

    if (this.active) {
      this.videoElement.nativeElement.play();
    }
  }

  preventDrag(event: any) {
    event.preventDefault();
  }

}
