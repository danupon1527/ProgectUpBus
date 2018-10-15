import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyDriver_2Page } from './emergency-driver-2';

@NgModule({
  declarations: [
    EmergencyDriver_2Page,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyDriver_2Page),
  ],
})
@Component({
  selector: 'page-emergency-driver-2',
  templateUrl: 'emergency-driver-2.html',
})
export class EmergencyDriver_2PageModule {}
