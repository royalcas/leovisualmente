import { MaterialModule } from './../shared/material.module';
import { SharedModule } from './../shared/shared.module';
import { PersonalIntroductionComponent } from './personal-introduction.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PersonalIntroductionComponent
  },
];


@NgModule({
  declarations: [ PersonalIntroductionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PersonalIntroductionModule { }
