import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListDetailDatePagePage } from './list-detail-date-page.page';

const routes: Routes = [
  {
    path: '',
    component: ListDetailDatePagePage
  },
  {
    path: 'view',
    component: ListDetailDatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListDetailDatePagePageRoutingModule {}
