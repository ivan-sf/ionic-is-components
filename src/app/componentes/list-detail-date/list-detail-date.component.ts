import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-detail-date',
  templateUrl: './list-detail-date.component.html',
  styleUrls: ['./list-detail-date.component.scss'],
})
export class ListDetailDateComponent implements OnInit {

  @Input() disabled:boolean;
  @Input() titleCard:any;
  @Input() subTitleCard:any;
  @Input() diaFechaToma:any;
  @Input() mesFechaToma:any;
  @Input() hourFechaToma:any;
  @Input() icono:any;
  @Input() valueWidthSubCard:any="120px";
  @Input() fontTime:any="15pt";
  // @Input() ngFor:any = "";
  
  constructor() { }

  ngOnInit() {
    
    let rootElement = document.documentElement;
    rootElement.style.setProperty("--valueWidthSubCard", this.valueWidthSubCard);
    (this.fontTime != "") ? rootElement.style.setProperty("--font-size", this.fontTime) : rootElement.style.setProperty("--font-size", "16pt")
  }

}
