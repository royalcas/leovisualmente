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
    loadChildren: () => import('./contact-me/contact-me.module').then(m => m.ContactMeModule)
  },
  {
    path: 'my-work',
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    component: PostalLayoutOutletComponent
  },
  {
    path: 'funny-facts',
    loadChildren: () => import('./funny-facts/funny-facts.module').then(m => m.FunnyFactsModule)
  },
  {
    path: 'duck',
    loadChildren: () => import('./personal-introduction/personal-introduction.module').then(m => m.PersonalIntroductionModule),
    component: PostalLayoutOutletComponent
  },
  { path: 'posters', loadChildren: () => import('./posters/posters.module').then(m => m.PostersModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
