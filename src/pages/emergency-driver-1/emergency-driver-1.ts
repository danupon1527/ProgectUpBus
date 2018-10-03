import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeDriverPage } from '../home-driver/home-driver';


/**
 * Generated class for the EmergencyDriver_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency-driver-1',
  templateUrl: 'emergency-driver-1.html',
})
export class EmergencyDriver_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmergencyDriver_1Page');
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: '[บันทึกสำเร็จ]',
      // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomeDriverPage)
  }
  openPageH(){
    this.navCtrl.setRoot(HomeDriverPage)
  }

}
