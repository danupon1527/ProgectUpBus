import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectBusScheduleDriverProvider } from '../../providers/connect-bus-schedule-driver/connect-bus-schedule-driver';



/**
 * Generated class for the BusScheduleDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-schedule-driver',
  templateUrl: 'bus-schedule-driver.html',
})
export class BusScheduleDriverPage {

  busSchedule:any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectBusSch: ConnectBusScheduleDriverProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusScheduleDriverPage');
    
    this.connectBusSch.getData().subscribe(data => {
      this.busSchedule=data
      console.log(data)
    })
  }

}
