import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeDriverPage } from '../home-driver/home-driver';


/**
 * Generated class for the TimeDrivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-drive',
  templateUrl: 'time-drive.html',
})
export class TimeDrivePage {
myDate : Date
dateShow : Date
EmyDate : Date
EdateShow : Date
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeDrivePage');
  }
  ShowmyDate(){
    this.myDate = new Date()
    console.log(this.myDate)
    this.dateShow = this.myDate
  }
  ShowEmyDate(){
    this.EmyDate = new Date()
    console.log(this.EmyDate)
    this.EdateShow = this.EmyDate
  }
  openPageH(){
    this.navCtrl.setRoot(HomeDriverPage)
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

}
