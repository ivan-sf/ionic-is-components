import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  circle:any=""
  labelOne:any=""
  labelTwo:any=""
  labelThree:any=""
  iconOne:any=""
  iconTwo:any=""
  iconThree:any=""
  iconOneAux:any=""
  iconTwoAux:any=""
  iconThreeAux:any=""

  constructor() { }


  ngOnInit() {
    this.circle = document.getElementById('circle');    
    this.labelOne = document.getElementById('label-tab-1');
    this.labelTwo = document.getElementById('label-tab-2');
    this.labelThree = document.getElementById('label-tab-3');
    this.iconOne = document.getElementById('icon-tab-button-1');
    this.iconTwo = document.getElementById('icon-tab-button-2');
    this.iconThree = document.getElementById('icon-tab-button-3');
    this.iconOneAux = document.getElementById('icon-tab-button-1-aux');
    this.iconTwoAux = document.getElementById('icon-tab-button-2-aux');
    this.iconThreeAux = document.getElementById('icon-tab-button-3-aux');
  }

  
  onClickTab1(){
    this.circle.classList.add('circle-tab-1-1');
    this.circle.classList.remove('circle-tab-1-2');
    this.circle.classList.remove('circle-tab-1-3');

    this.labelOne.classList.add('label-tab-active');
    this.labelTwo.classList.remove('label-tab-active');
    this.labelThree.classList.remove('label-tab-active');

    this.iconOne.classList.add('icon-tab-active');
    this.iconTwo.classList.remove('icon-tab-active');
    this.iconThree.classList.remove('icon-tab-active');

    this.iconOne.classList.add('icon-hidden');
    this.iconTwo.classList.remove('icon-hidden');
    this.iconThree.classList.remove('icon-hidden');

    this.iconOneAux.classList.remove('icon-hidden');
    this.iconOneAux.classList.add('icon-tab-active');

    this.iconTwoAux.classList.add('icon-hidden');
    this.iconThreeAux.classList.add('icon-hidden');
  }


  onClickTab2(){

    this.circle.classList.remove('circle-tab-1-1');
    this.circle.classList.add('circle-tab-1-2');
    this.circle.classList.remove('circle-tab-1-3');

    this.labelOne.classList.remove('label-tab-active');
    this.labelTwo.classList.add('label-tab-active');
    this.labelThree.classList.remove('label-tab-active');

    this.iconOne.classList.remove('icon-tab-active');
    this.iconTwo.classList.add('icon-tab-active');
    this.iconThree.classList.remove('icon-tab-active');

    this.iconOne.classList.remove('icon-hidden');
    this.iconTwo.classList.add('icon-hidden');
    this.iconThree.classList.remove('icon-hidden');

    this.iconTwoAux.classList.remove('icon-hidden');
    this.iconTwoAux.classList.add('icon-tab-active');

    this.iconOneAux.classList.add('icon-hidden');
    this.iconThreeAux.classList.add('icon-hidden');
  }

  onClickTab3(){
    this.circle.classList.remove('circle-tab-1-1');
    this.circle.classList.remove('circle-tab-1-2');
    this.circle.classList.add('circle-tab-1-3');

    this.labelOne.classList.remove('label-tab-active');
    this.labelTwo.classList.remove('label-tab-active');
    this.labelThree.classList.add('label-tab-active');

    this.iconOne.classList.remove('icon-tab-active');
    this.iconTwo.classList.remove('icon-tab-active');
    this.iconThree.classList.add('icon-tab-active');

    this.iconOne.classList.remove('icon-hidden');
    this.iconTwo.classList.remove('icon-hidden');
    this.iconThree.classList.add('icon-hidden');
    
    this.iconThreeAux.classList.remove('icon-hidden');
    this.iconThreeAux.classList.add('icon-tab-active');

    this.iconOneAux.classList.add('icon-hidden');
    this.iconTwoAux.classList.add('icon-hidden');
  }
  
}
