import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LifePage } from "../pages/life/life";
import { PublishPage } from "../pages/publish/publish";
import { MyPage } from "../pages/my/my";
import { FindPage } from "../pages/find/find";


@NgModule({
  declarations: [
    MyApp,
    FindPage,
    MyPage,
    PublishPage,
    HomePage,
    TabsPage,
    LifePage
 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FindPage,
    MyPage,
    PublishPage,
    HomePage,
    TabsPage,
    LifePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
