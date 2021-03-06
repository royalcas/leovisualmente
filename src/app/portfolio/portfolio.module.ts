import { Routes, Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HammerModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: ':categoryId',
    component: PortfolioComponent
  },
  {
    path: ':categoryId/:id',
    component: ProjectDetailsComponent
  }
];

@NgModule({
  imports: [CommonModule, HammerModule,  RouterModule.forChild(routes), SharedModule],
  declarations: [PortfolioComponent, ProjectDetailsComponent]
})
export class PortfolioModule {}
