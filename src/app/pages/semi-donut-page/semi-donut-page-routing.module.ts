import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemiDonutPagePage } from './semi-donut-page.page';

const routes: Routes = [
  {
    path: '',
    component: SemiDonutPagePage
  },
  {
    path: 'view',
    component: SemiDonutPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemiDonutPagePageRoutingModule {}
