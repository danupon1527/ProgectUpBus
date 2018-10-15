import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeUserPage } from './home-user';

@NgModule({
  declarations: [
    HomeUserPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeUserPage),
  ],
})
@Component({
  selector: 'page-home-user',
  templateUrl: 'home-user.html',
})
export class HomeUserPageModule {}
