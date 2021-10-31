import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemiDonutPagePageRoutingModule } from './semi-donut-page-routing.module';

import { SemiDonutPagePage } from './semi-donut-page.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemiDonutPagePageRoutingModule,
    ComponentesModule
  ],
  declarations: [SemiDonutPagePage]
})
export class SemiDonutPagePageModule {}
