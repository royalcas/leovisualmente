import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunnyFactsComponent } from './funny-facts/funny-facts.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FunnyFactsComponent
  }
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [FunnyFactsComponent]
})
export class FunnyFactsModule {}
