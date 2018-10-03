import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusAddDriver_1Page } from '../bus-add-driver-1/bus-add-driver-1';
import { BusAddDriver_2Page } from '../bus-add-driver-2/bus-add-driver-2';
import { BusAddDriver_3Page } from '../bus-add-driver-3/bus-add-driver-3';


/**
 * Generated class for the BusAddDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-add-driver',
  templateUrl: 'bus-add-driver.html',
})
export class BusAddDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusAddDriverPage');
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
