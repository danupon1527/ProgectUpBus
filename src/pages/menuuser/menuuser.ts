// import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, App } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { HomeUserPage } from '../home-user/home-user';
import { Page } from '../../../node_modules/ionic-angular/umd/navigation/nav-util';



/**
 * Generated class for the MenuuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menuuser',
  templateUrl: 'menuuser.html',
})
export class MenuuserPage {
  @ViewChild(Nav) nav: Nav;
  rootPagess: any = HomeUserPage
  String: Page

  // pagess: Array<{title1: string, component1: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menucon: MenuController, public app: App) {
    menucon.enable(true)
  //   this.initializeAppp();
  //   this.pagess = [
  //     { title1: 'Home', component1: HomePage },
  //     { title1: 'Login', component1: LoginPage }
  //   ];
  // }


  // initializeAppp() {
  //   // console.log('ionViewDidLoad MenuuserPage');
  //   this.platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     this.statusBar.styleDefault();
  //     this.splashScreen.hide();
  //   });
  // }
  // openPages(pagess) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(pagess.component1);
  }
  openPageH(){
    this.navCtrl.setRoot(HomeUserPage)
  }
  openPageL(){
    this.navCtrl.setRoot(HomePage)
  }
  // closeMenu(){
  //   this.navCtrl.setRoot(HomeUserPage)
  // }



}
