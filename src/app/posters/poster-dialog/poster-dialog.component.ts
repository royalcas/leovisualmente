import { ProjectImage } from './../../portfolio/portfolio/models/portfolio';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-poster-dialog',
  templateUrl: './poster-dialog.component.html',
  styleUrls: ['./poster-dialog.component.scss']
})
export class PosterDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PosterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectImage) { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
