import { PostalLayoutOutletComponent } from './shared/postal-layout-outlet/postal-layout-outlet.component';
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
    loadChildren: './contact-me/contact-me.module#ContactMeModule'
  },
  {
    path: 'my-work',
    loadChildren: './portfolio/portfolio.module#PortfolioModule',
    component: PostalLayoutOutletComponent
  },
  {
    path: 'funny-facts',
    loadChildren: './funny-facts/funny-facts.module#FunnyFactsModule'
  },
  {
    path: 'duck',
    loadChildren: './personal-introduction/personal-introduction.module#PersonalIntroductionModule'
  },
  { path: 'posters', loadChildren: () => PostersModule },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
