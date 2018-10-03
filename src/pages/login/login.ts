import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Keyboard } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomeUserPage } from '../home-user/home-user';
import { HomePage } from '../home/home';
import { HomeDriverPage } from '../home-driver/home-driver';
import { ConnectProvider } from '../../providers/connect/connect';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { ConnectUserDriverProvider } from '../../providers/connect-user-driver/connect-user-driver';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userAll:any=[]
  userDriver:any=[]
  

  // user_id:number
  // user_user:string
  // user_pass:string


  status:any
  statusLoginisJ:any
  statusLoginisI:any
  statusLoginisDriverL:any
  statusLoginisDriverK:any
  statusLoginisDJ:any
  statusLoginisDI:any

  todo = {
    username:null,
    password:null
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public keyboard: Keyboard, public connectP: ConnectProvider, public connectUdriver: ConnectUserDriverProvider) {

  }
  // keyboardC() {
  //   console.log('The keyboard is open:', this.keyboard.isOpen());
  // }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
    this.connectP.getData().subscribe(data => {
      this.userAll=data
      console.log(data)
    })

    this.connectUdriver.getData().subscribe(data => {
      this.userDriver=data
      console.log(data)
    })
  }
  logForm() {
    console.log(this.todo)
    console.log(this.userAll.length)
    console.log(this.userAll[1].user)
    console.log(this.userAll[1].pass)
    console.log(this.userDriver[0].user_driver)
    console.log(this.userDriver[0].user_pass)



    // if(this.todo.username=="user" && this.todo.password=="1234"){
    //   // console.log("true")
    //   // status='true'
    //   // console.log(status)
    //   this.showAlert(status='true')
    //   this.navCtrl.setRoot(HomeUserPage)
    // }
    // else if(this.todo.username=="driver" && this.todo.password=="1234"){
    //   this.showAlert(status='true')
    //   this.navCtrl.setRoot(HomeDriverPage)
    // }
    // else{
    //   // console.log("false")
    //   // status='false'
    //   this.showAlert(status='false')
    //   this.navCtrl.setRoot(HomePage)
    // }

    // ----------------------------------------

    for(let i=0;i<this.userAll.length;i++){
      if(this.todo.username==this.userAll[i].user){
        for(let j=0;j<this.userAll.length;j++){
          if(this.todo.password==this.userAll[j].pass){
            this.statusLoginisJ=true
          }
        }
        this.statusLoginisJ
        console.log("statusJ:",this.statusLoginisJ)
        
        this.statusLoginisI=true
      }
      else{
        for(let k=0;k<this.userDriver.length;k++){
          if(this.todo.username==this.userDriver[k].user_driver){
            for(let l=0;l<this.userDriver.length;l++){
              if(this.todo.password==this.userDriver[l].user_pass){
                this.statusLoginisDriverL=true
              }
            }
            this.statusLoginisDriverL
            console.log("statusLdriver:",this.statusLoginisDriverL)
            this.statusLoginisDriverK=true
          }
        }
        this.statusLoginisDriverK
      }

    }
    this.statusLoginisI
    console.log("statusI:",this.statusLoginisI)
    this.statusLoginisDriverK
    console.log("statusKdriver:",this.statusLoginisDriverK)

    if(this.statusLoginisJ==true&&this.statusLoginisI==true){
      this.showAlert(status='true')
      this.navCtrl.setRoot(HomeUserPage)
    }
    else if(this.statusLoginisDriverL==true&&this.statusLoginisDriverK==true){
      this.showAlert(status='true')
      this.navCtrl.setRoot(HomeDriverPage)
    }
    else{
      this.showAlert(status='false')
      this.navCtrl.setRoot(LoginPage)
    }
    
    // ----------------------------------------

    // console.log(status)
  }
  showAlert(status) {
    console.log(status)
    if(status=='true'){
      const alert = this.alertCtrl.create({
        title: 'เข้าสู่ระบบ',
        // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
    }else if(status=='false'){
      const alert = this.alertCtrl.create({
        title: 'ล้มเหลว',
        // subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  HomePage(){
    this.navCtrl.setRoot(HomePage)
  }


  

}
