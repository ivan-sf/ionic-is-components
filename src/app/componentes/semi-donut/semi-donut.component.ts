import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-semi-donut',
  templateUrl: './semi-donut.component.html',
  styleUrls: ['./semi-donut.component.scss'],
})
export class SemiDonutComponent implements OnInit {
  
  @Input() porcentaje:any;
  @Input() mensaje:any;

  constructor() { }

  ngOnInit() {
    let rootElement = document.documentElement;
    rootElement.style.setProperty("--porcentaje", '0');
    const porcentajeVal = this.porcentaje;
    setTimeout(function(){ 
      rootElement.style.setProperty("--porcentaje", porcentajeVal);
    }, 1000);
  }
}
