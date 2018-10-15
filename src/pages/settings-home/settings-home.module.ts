import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsHomePage } from './settings-home';

@NgModule({
  declarations: [
    SettingsHomePage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsHomePage),
  ],
})
@Component({
  selector: 'page-settings-home',
  templateUrl: 'settings-home.html',
})
export class SettingsHomePageModule {}
