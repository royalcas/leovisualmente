import { MaterialModule } from './../shared/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostersComponent } from './posters/posters.component';
import { Routes, RouterModule } from '@angular/router';
import { PosterDialogComponent } from './poster-dialog/poster-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: PostersComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule
  ],
  declarations: [PostersComponent, PosterDialogComponent],
  entryComponents: [ PosterDialogComponent ]
})
export class PostersModule { }
