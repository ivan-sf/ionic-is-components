import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageModule } from '../pages/home/home.module';
import { BioPageModule } from '../pages/bio/bio.module';
import { ConfigPageModule } from '../pages/config/config.module';
import { GalleryPageModule } from '../pages/gallery/gallery.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'home',
        loadChildren:()=>import('../pages/home/home.module').then(m=>HomePageModule)
      },
      {
        path:'gallery',
        loadChildren:()=>import('../pages/gallery/gallery.module').then(m=>GalleryPageModule)
      },
      {
        path:'bio',
        loadChildren:()=>import('../pages/bio/bio.module').then(m=>BioPageModule)
      },
      {
        path:'config',
        loadChildren:()=>import('../pages/config/config.module').then(m=>ConfigPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
