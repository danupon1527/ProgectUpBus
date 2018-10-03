import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyDriverPage } from './emergency-driver';

@NgModule({
  declarations: [
    EmergencyDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyDriverPage),
  ],
})
export class EmergencyDriverPageModule {}
