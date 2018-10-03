import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ConnectEvaluateServiceBusProvider } from '../../providers/connect-evaluate-service-bus/connect-evaluate-service-bus';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { ngModuleJitUrl } from '../../../node_modules/@angular/compiler';
import { NgModel } from '../../../node_modules/@angular/forms';
import { EvaluateServicePage } from '../evaluate-service/evaluate-service';
import { HomeUserPage } from '../home-user/home-user';
import { InsertScoreEvaluateServiceBusProvider } from '../../providers/insert-score-evaluate-service-bus/insert-score-evaluate-service-bus';






/**
 * Generated class for the EvaluateServiceBusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evaluate-service-bus',
  templateUrl: 'evaluate-service-bus.html',
})
export class EvaluateServiceBusPage {

  evaluateSbus:any=[]
  // loopS:any=[]
  // loopScore={
  //   loopS:['a']
  // }
  // lengthData:any=[]
  score1:number
  score2:number
  todo={
    score1: null,
    score2: null
  }
  // id:number
  // dataS:string
  // Data={
  //   id: 10,
  //   evaluate_bus: "สวัสดีครับบ"
  // }

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public connectEbus: ConnectEvaluateServiceBusProvider, public alertCtrl: AlertController, public insertESBus: InsertScoreEvaluateServiceBusProvider, private http: HttpClient) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad EvaluateServiceBusPage');
    this.connectEbus.getData().subscribe(data => {
      this.evaluateSbus=data
      console.log(data)
      
      console.log(this.todo.score1)
      console.log(this.todo.score2)


      // this.lengthData=this.evaluateSbus.length
      // console.log(this.lengthData)

      // console.log(this.todo.score1)
      

    })
    
  }
  addScore(s1,s2){
    console.log(s1)
    console.log(s2)
    this.insertESBus.addSbus(s1,s2).then(data => {
      console.log("I Receiver : "+ JSON.stringify(data));
    })
  }
  
  // evaluateServiceP(){
  //   this.navCtrl.setRoot(EvaluateServicePage)
  // }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: '[บันทึกสำเร็จ]',
      // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomeUserPage)
  }
  // onSubmit(){

  // }
  


}
