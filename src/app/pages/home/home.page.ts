import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  stateItem: any[];
  items:any[] = Array(20)
  titleCard="2000"
  subTitleCard="mmHG"
  diaFechaToma="29"
  mesFechaToma="OCT"
  hourFechaToma="11:00:06 PM"
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
