import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ConnectServiveIntroProvider } from '../../providers/connect-servive-intro/connect-servive-intro';
import { SettingsHomePage } from '../settings-home/settings-home';
import { Map1Page } from '../map1/map1';
import { Map2Page } from '../map2/map2';
import { Map3Page } from '../map3/map3';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  serviceI:any=[]

  constructor(public navCtrl: NavController, public connectSI: ConnectServiveIntroProvider) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceIntroPage');
    this.connectSI.getData().subscribe(data => {
      this.serviceI=data
      console.log(data)
    })
  }
  gotoLoginP(){
    this.navCtrl.setRoot(LoginPage)
  }
  openPageS(){
    this.navCtrl.push(SettingsHomePage)
  }
  openPageM1(){
    this.navCtrl.push(Map1Page)
  }
  openPageM2(){
    this.navCtrl.push(Map2Page)
  }
  openPageM3(){
    this.navCtrl.push(Map3Page)
  }

}
