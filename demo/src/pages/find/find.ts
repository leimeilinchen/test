import { Component } from '@angular/core';
import { Platform  } from 'ionic-angular';

@Component({
  selector: 'page-find',
  templateUrl: 'find.html'
})
export class FindPage {
  pet: string = "hot";
  isAndroid: boolean = false;

}
