import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConnectEvaluateServiceDriverProvider } from '../../providers/connect-evaluate-service-driver/connect-evaluate-service-driver';
import { HomeUserPage } from '../home-user/home-user';
import { InsertScoreEvaluateServiceBusProvider } from '../../providers/insert-score-evaluate-service-bus/insert-score-evaluate-service-bus';



/**
 * Generated class for the EvaluateServiceDriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-service-driver',
  templateUrl: 'evaluate-service-driver.html',
})
export class EvaluateServiceDriverPage {

  evaluateSdriver:any=[]

  score1:number
  score2:number
  todo={
    score1: null,
    score2: null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectEdriver: ConnectEvaluateServiceDriverProvider, public alertCtrl: AlertController, public insertESdriver: InsertScoreEvaluateServiceBusProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EvaluateServiceDriverPage');
    this.connectEdriver.getData().subscribe(data => {
      this.evaluateSdriver=data
      console.log(data)

      console.log(this.todo.score1)
      console.log(this.todo.score2)
    })
  }
  addScoreB(s1,s2){
    console.log(s1)
    console.log(s2)
    this.insertESdriver.addSdriver(s1,s2).then(data => {
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

