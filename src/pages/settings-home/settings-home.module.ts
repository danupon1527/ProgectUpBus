import { NgModule } from '@angular/core';
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
export class SettingsHomePageModule {}
