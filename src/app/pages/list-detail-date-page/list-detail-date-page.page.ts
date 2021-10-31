import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail-date-page',
  templateUrl: './list-detail-date-page.page.html',
  styleUrls: ['./list-detail-date-page.page.scss'],
})
export class ListDetailDatePagePage implements OnInit {

  stateItem: any[];
  items:any[] = Array(20)
  titleCard="2000"
  subTitleCard="mmHG"
  diaFecha="29"
  mesFecha="OCT"
  hourFecha="11:00:06 PM"
  constructor() { }

  ngOnInit() {
    this.changeStateItem(0)
  }

  changeStateItem(id:any) {
    this.stateItem = []
    this.stateItem.push({state : true, id})
    // console.log(this.stateItem['0']['id'],this.stateItem['0']['state'],this.stateItem)
  }

}
