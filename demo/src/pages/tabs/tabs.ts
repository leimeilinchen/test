import { Component } from '@angular/core';
import {ModalController,NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { PublishPage } from "../publish/publish";
import { LifePage } from "../life/life";
import { MyPage } from "../my/my";
import { FindPage } from "../find/find";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FindPage;
  tab3Root = PublishPage;
  tab4Root = LifePage;
  tab5Root = MyPage;
 

  constructor(public modalCtrl:ModalController,public nav: NavController  ) {

  }
  OpenPage(){
 this.nav.push(PublishPage);

  }
   
}
