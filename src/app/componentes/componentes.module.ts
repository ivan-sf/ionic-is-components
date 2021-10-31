import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { ListDetailDateComponent } from './list-detail-date/list-detail-date.component';



@NgModule({
  declarations: [
    TabComponent,
    ListDetailDateComponent
  ],
  exports:[
    TabComponent,
    ListDetailDateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
