import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListDetailDatePagePageRoutingModule } from './list-detail-date-page-routing.module';

import { ListDetailDatePagePage } from './list-detail-date-page.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListDetailDatePagePageRoutingModule,
    ComponentesModule
  ],
  declarations: [ListDetailDatePagePage]
})
export class ListDetailDatePagePageModule {}
