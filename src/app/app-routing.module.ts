import { ContactMeModule } from './contact-me/contact-me.module';
import { PostersModule } from './posters/posters.module';
import { FunnyFactsModule } from './funny-facts/funny-facts.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: IndexComponent },
  {
    path: 'contact',
    loadChildren: () => ContactMeModule
  },
  {
    path: 'my-work',
    loadChildren: () => PortfolioModule
  },
  {
    path: 'funny-facts',
    loadChildren: () => FunnyFactsModule
  },
  { path: 'posters', loadChildren: () => PostersModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
