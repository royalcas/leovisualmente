import { Component, OnInit, Input } from '@angular/core';
import { timer, Observable, interval } from 'rxjs';
import { take, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-message-line',
  templateUrl: './message-line.component.html',
  styleUrls: ['./message-line.component.scss']
})
export class MessageLineComponent implements OnInit {
  @Input() paragraphs: string[];

  displayedParagraphs$: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.displayedParagraphs$ = timer(1000, 3000).pipe(
      take(this.paragraphs.length),
      map((numberOfParragraphsToDisplay: number) => this.paragraphs.slice(numberOfParragraphsToDisplay, numberOfParragraphsToDisplay + 1))
    );
  }
}
