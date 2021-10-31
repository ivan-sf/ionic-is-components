import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then( m => m.GalleryPageModule)
  },
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module').then( m => m.ConfigPageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./pages/bio/bio.module').then( m => m.BioPageModule)
  },
  {
    path: 'list-detail-date-page',
    loadChildren: () => import('./pages/list-detail-date-page/list-detail-date-page.module').then( m => m.ListDetailDatePagePageModule)
  },
  {
    path: 'semi-donut-page',
    loadChildren: () => import('./pages/semi-donut-page/semi-donut-page.module').then( m => m.SemiDonutPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
