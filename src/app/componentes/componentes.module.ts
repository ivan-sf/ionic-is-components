import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { ListDetailDateComponent } from './list-detail-date/list-detail-date.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    TabComponent,
    ListDetailDateComponent,
    HeaderComponent
  ],
  exports:[
    TabComponent,
    ListDetailDateComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentesModule { }
