import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConnectServiveIntroProvider } from '../../providers/connect-servive-intro/connect-servive-intro';

/**
 * Generated class for the ServiceIntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-service-intro',
  templateUrl: 'service-intro.html',
})
export class ServiceIntroPage {

  serviceI:any=[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectSI: ConnectServiveIntroProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceIntroPage');
    this.connectSI.getData().subscribe(data => {
      this.serviceI=data
      console.log(data)
    })
  }

}
