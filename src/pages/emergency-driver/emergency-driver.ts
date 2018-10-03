import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmergencyDriver_1Page } from '../emergency-driver-1/emergency-driver-1';
import { EmergencyDriver_2Page } from '../emergency-driver-2/emergency-driver-2';
import { EmergencyDriver_3Page } from '../emergency-driver-3/emergency-driver-3';


/**
 * Generated class for the EmergencyDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency-driver',
  templateUrl: 'emergency-driver.html',
})
export class EmergencyDriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyDriverPage');
  }


  openPage1(){
    this.navCtrl.push(EmergencyDriver_1Page) 
  }

  openPage2(){
    this.navCtrl.push(EmergencyDriver_2Page)
  }
  openPage3(){
    this.navCtrl.push(EmergencyDriver_3Page)
  }

}
