import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tab2Page } from './tab2/tab2.page';
import { IonicStorageModule } from '@ionic/storage';
import { NgCalendarModule } from 'ionic2-calendar';
import { NgCircleProgressModule } from 'ng-circle-progress';


import 'chartjs-plugin-zoom';



@NgModule({
  declarations: [AppComponent, Tab2Page],
  entryComponents: [],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
