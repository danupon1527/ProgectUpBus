import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusRequestsAdd_1Page } from '../bus-requests-add-1/bus-requests-add-1';
import { BusRequestsAdd_2Page } from '../bus-requests-add-2/bus-requests-add-2';
import { BusRequestsAdd_3Page } from '../bus-requests-add-3/bus-requests-add-3';

/**
 * Generated class for the BusRequestsAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-requests-add',
  templateUrl: 'bus-requests-add.html',
})
export class BusRequestsAddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusRequestsAddPage');
  }
  openPage1(){
    this.navCtrl.push(BusRequestsAdd_1Page)
  }
  openPage2(){
    this.navCtrl.push(BusRequestsAdd_2Page)
  }
  openPage3(){
    this.navCtrl.push(BusRequestsAdd_3Page)
  }

}
