import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-publish',
  templateUrl: 'publish.html'
})
export class PublishPage {
  constructor(public navCtrl: NavController) {}

  goBack() {
    this.navCtrl.pop();
  }

}

