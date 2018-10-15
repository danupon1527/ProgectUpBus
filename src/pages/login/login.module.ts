import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPageModule {}
