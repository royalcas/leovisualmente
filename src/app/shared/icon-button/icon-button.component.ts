import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  alt: string;

  @Input()
  href: string;

  @Output()
  click = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onClick(event: MouseEvent) {
    if (!this.href) {
      event.preventDefault();
    }
    this.click.emit(event);
  }
}
