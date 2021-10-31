import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  componentes:Componente[]=[
    {
      icon:'american-football',
      name:'List Detail Date',
      redirectTo:'/list-detail-date-page'
    },
    {
      icon:'pie-chart',
      name:'Semi Donut',
      redirectTo:'/semi-donut'
    },
  ]

  constructor(
    public navController: NavController,
  ) { }

  ngOnInit() {
  }

  viewPages(page) {
    // console.log(page)
      this.navController.navigateBack('/' + page + '/view');
  }
  
}
