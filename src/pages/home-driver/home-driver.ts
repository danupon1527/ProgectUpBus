import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenudriverPage } from '../menudriver/menudriver';
import { TimeDrivePage } from '../time-drive/time-drive';
import { BusScheduleDriverPage } from '../bus-schedule-driver/bus-schedule-driver';
import { EmergencyDriverPage } from '../emergency-driver/emergency-driver';
import { BusAddDriverPage } from '../bus-add-driver/bus-add-driver';
import { HomePage } from '../home/home';


/**
 * Generated class for the HomeDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-driver',
  templateUrl: 'home-driver.html',
})
export class HomeDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDriverPage');
  }
  menuDriver(){
    this.navCtrl.push(MenudriverPage)
  }
  openPageT(){
    this.navCtrl.push(TimeDrivePage)
  }
  openPageB(){
    this.navCtrl.push(BusScheduleDriverPage)
  }
  openPageE(){
    this.navCtrl.push(EmergencyDriverPage)
  }
  openPageBA(){
    this.navCtrl.push(BusAddDriverPage)
  }
  openPageHome(){
    this.navCtrl.setRoot(HomePage)
  }

}
