import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EvaluateServiceBusPage } from '../evaluate-service-bus/evaluate-service-bus';
import { EvaluateServiceDriverPage } from '../evaluate-service-driver/evaluate-service-driver';


/**
 * Generated class for the EvaluateServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-service',
  templateUrl: 'evaluate-service.html',
})
export class EvaluateServicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvaluateServicePage');
  }
  openPageEb(){
    this.navCtrl.push(EvaluateServiceBusPage)
  }
  openPageDr(){
    this.navCtrl.push(EvaluateServiceDriverPage)
  }

}
