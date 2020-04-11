import { IBubbleItem } from './ibubble-item.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentChecked,
  Input,
  AfterViewInit
} from '@angular/core';
import * as d3 from 'd3';
import { HierarchyNode, PackLayout, HierarchyCircularNode, stratify } from 'd3';

@Component({
  selector: 'app-bubble',
  templateUrl: './bubble.component.html',
  styleUrls: ['./bubble.component.scss']
})
export class BubbleComponent implements OnInit, AfterViewInit {
  @ViewChild('container')
  containerDiv: ElementRef;

  @Input()
  bubbles: IBubbleItem[];

  public width = 930;
  public height = 430;
  private colors = ['#EF7A06', '#B7B7B7', '#000000'];

  public data: PackLayout<IBubbleItem>[];

  constructor() {}

  ngOnInit() {
    this.buildBubbleChart();
  }

  ngAfterViewInit() {
    this.buildBubbleChart();
  }

  buildBubbleChart() {
    this.adjustChartSize();
    const sizedBubbles = this.getSizedRandomlyBubbles(this.bubbles);

    const root: any = d3
      .hierarchy({ children: sizedBubbles })
      .sum((d: any) => d.value);

    const bubblesPack = d3
      .pack()
      .size([this.width, this.height])
      .padding(1.5);

    this.data = bubblesPack(root).leaves() as any;
  }

  adjustChartSize() {
    const containerWidth = this.containerDiv.nativeElement.offsetWidth;
    if (containerWidth) {
      this.width = containerWidth;
    }
  }

  get randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  getTranslate(x: number, y: number): string {
    return `translate(${x}, ${y})`;
  }

  private getSizedRandomlyBubbles(bubbles: IBubbleItem[]): any[] {
    return bubbles.map(bubble => {
      return { ...bubble, value: Math.random() };
    });
  }
}
