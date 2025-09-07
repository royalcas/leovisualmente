import { PosterDialogComponent } from './../poster-dialog/poster-dialog.component';
import { ProjectImage } from './../../portfolio/portfolio/models/portfolio';
import { PostersService } from './../posters.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/portfolio/portfolio/models/portfolio';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent implements OnInit {

  showMenu = false;
  posterProject$: Observable<IProject>;

  constructor(private postersService: PostersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.posterProject$ = this.postersService.getPosters();
  }

  openPoster(poster: ProjectImage) {
    const dialogRef = this.dialog.open(PosterDialogComponent, {
      panelClass: 'poster-dialog-panel',
      data: poster
    });
  }
}
