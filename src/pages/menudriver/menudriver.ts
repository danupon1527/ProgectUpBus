import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeDriverPage } from '../home-driver/home-driver';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenudriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menudriver',
  templateUrl: 'menudriver.html',
})
export class MenudriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenudriverPage');
  }
  openPageH(){
    this.navCtrl.setRoot(HomeDriverPage)
  }
  openPageL(){
    this.navCtrl.setRoot(HomePage)
  }
  closeMenu(){
    this.navCtrl.setRoot(HomeDriverPage)
  }
}
