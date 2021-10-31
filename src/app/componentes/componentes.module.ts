import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { ListDetailDateComponent } from './list-detail-date/list-detail-date.component';
import { HeaderComponent } from './header/header.component';
import { SemiDonutComponent } from './semi-donut/semi-donut.component';



@NgModule({
  declarations: [
    TabComponent,
    ListDetailDateComponent,
    HeaderComponent,
    SemiDonutComponent
  ],
  exports:[
    TabComponent,
    ListDetailDateComponent,
    HeaderComponent,
    SemiDonutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
