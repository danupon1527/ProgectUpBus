import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomeUserPage } from '../home-user/home-user';
import { InsertRequestsAddAllProvider } from '../../providers/insert-requests-add-all/insert-requests-add-all';
import { HttpClient } from '@angular/common/http';





/**
 * Generated class for the BusRequestsAdd_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bus-requests-add-1',
  templateUrl: 'bus-requests-add-1.html',
})
export class BusRequestsAdd_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public insertReqAdd: InsertRequestsAddAllProvider, private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusRequestsAdd_1Page');
  }

  openPageH(){
    this.navCtrl.setRoot(HomeUserPage)
  }

  addRequestsUp(eme){
    console.log(eme)
    this.insertReqAdd.addReqUp(eme).then(data => {
      console.log("I Receiver : "+ JSON.stringify(data));
    })
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: '[บันทึกสำเร็จ]',
      // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomeUserPage)
  }

}
