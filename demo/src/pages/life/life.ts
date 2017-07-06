import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-life',
  templateUrl: 'life.html'
})
export class LifePage {

   pet: string = "boutique";
   isAndroid: boolean = false;

  public click: number = 0;
  constructor() {

  }


}
