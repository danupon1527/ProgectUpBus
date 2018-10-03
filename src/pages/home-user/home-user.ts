import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Menu, MenuToggle } from 'ionic-angular';
import { MenuuserPage } from '../menuuser/menuuser';
import { HomePage } from '../home/home';
import { ServiceIntroPage } from '../service-intro/service-intro';
import { EvaluateServicePage } from '../evaluate-service/evaluate-service';
import { BusRequestsAddPage } from '../bus-requests-add/bus-requests-add';
import { DivideJourneyPage } from '../divide-journey/divide-journey';


/**
 * Generated class for the HomeUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})
export class HomeUserPage {

  // rootPagess: any = HomePage

  constructor(public navCtrl: NavController, public navParams: NavParams ,public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeUserPage');
  }
  menuusers(){
    // console.log(MenuuserPage)
    this.navCtrl.push(MenuuserPage)
  }
  openPageS(){
    this.navCtrl.push(ServiceIntroPage)
  }
  openPageE(){
    this.navCtrl.push(EvaluateServicePage)
  }
  openPageB(){
    this.navCtrl.push(BusRequestsAddPage)
  }
  openPageD(){
    this.navCtrl.push(DivideJourneyPage)
  }
  openPageHome(){
    this.navCtrl.setRoot(HomePage)
  }

}
