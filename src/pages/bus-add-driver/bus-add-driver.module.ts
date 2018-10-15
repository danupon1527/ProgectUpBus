import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPageModule, NavController, NavParams } from 'ionic-angular';
import { BusAddDriverPage } from './bus-add-driver';
import { BusAddDriver_1Page } from '../bus-add-driver-1/bus-add-driver-1';
import { BusAddDriver_2Page } from '../bus-add-driver-2/bus-add-driver-2';
import { BusAddDriver_3Page } from '../bus-add-driver-3/bus-add-driver-3';

@NgModule({
  declarations: [
    BusAddDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(BusAddDriverPage),
  ],
})
@Component({
  selector: 'page-bus-add-driver',
  templateUrl: 'bus-add-driver.html',
})
export class BusAddDriverPageModule {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  openPage1(){
    this.navCtrl.push(BusAddDriver_1Page)
  }
  openPage2(){
    this.navCtrl.push(BusAddDriver_2Page)
  }
  openPage3(){
    this.navCtrl.push(BusAddDriver_3Page)
  }
  

}
