import { Component, OnInit } from '@angular/core';
import {Home} from '../home';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title : string = "Homes";
  homeNuevo : Home;
  homes: Home[] = [];

  constructor() {
    this.homeNuevo = new Home(
      '','');
   }

  ngOnInit() {
    this.homes.push(new Home('cancion 1',''));

  }

  guardar (){

    this.homes.unshift(this.homeNuevo );
    this.homeNuevo = new Home(
      '','');
  }


}
