import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagSelect } from './tag-select.model';

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent implements OnInit {
  @Input()
  tags: string[];

  @Output()
  change = new EventEmitter<string[]>();

  tagSelections: TagSelect[];

  constructor() {}

  ngOnInit() {
    if (this.tags && this.tags.length) {
      this.tagSelections = this.tags.map(tag => new TagSelect(tag, false));
    }
  }

  onSelect(clickedTag: string, event: MouseEvent) {
    this.tagSelections = this.tagSelections.map(tagSelection => {
      return new TagSelect(
        tagSelection.tag,
        tagSelection.tag === clickedTag
          ? !tagSelection.selected
          : tagSelection.selected
      );
    });

    this.emitValues();
  }

  emitValues() {
    const tags = this.tagSelections.map(selection => selection.tag);
    this.change.emit(tags);
  }
}
