import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeDriverPage } from './home-driver';

@NgModule({
  declarations: [
    HomeDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeDriverPage),
  ],
})
@Component({
  selector: 'page-home-driver',
  templateUrl: 'home-driver.html',
})
export class HomeDriverPageModule {}
