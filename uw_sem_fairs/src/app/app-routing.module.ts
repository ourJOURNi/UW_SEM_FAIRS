import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resources',
    loadChildren: () => import('./pages/resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'selection',
    loadChildren: () => import('./pages/fairs/selection.module').then( m => m.SelectionPageModule)
  },
  {
    path: 'fair-page/:id/:fair/:date/:address/:city/:state/:zip/:usertype/:summary/:agenda/:faq/:partners',
    loadChildren: () => import('./pages/fairs/fair-page/fair-page.module').then( m => m.FairPagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
