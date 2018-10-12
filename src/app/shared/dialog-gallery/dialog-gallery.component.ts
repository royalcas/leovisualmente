import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IDialogGalleryModel } from './idialog-gallery.model';

@Component({
  selector: 'app-dialog-gallery',
  templateUrl: './dialog-gallery.component.html',
  styleUrls: ['./dialog-gallery.component.scss']
})
export class DialogGalleryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogGalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogGalleryModel
  ) {}

  ngOnInit() {}
}
