import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BubbleComponent],
  exports: [BubbleComponent]
})
export class ChartsModule {}
