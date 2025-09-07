import { SafeHtml } from '@angular/platform-browser';

import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { IDialogGalleryModel } from './idialog-gallery.model';
import { CfHtmlPipe } from '../pipes/cf-html.pipe';

@Component({
  selector: 'app-dialog-gallery',
  templateUrl: './dialog-gallery.component.html',
  styleUrls: ['./dialog-gallery.component.scss']
})
export class DialogGalleryComponent implements OnInit {
  descriptionHtml: SafeHtml;
  constructor(
    public dialogRef: MatDialogRef<DialogGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogGalleryModel,
    private cfHtml: CfHtmlPipe,
  ) {}

  ngOnInit() {
    this.descriptionHtml = this.cfHtml.transform(this.data.description)
  }
}
