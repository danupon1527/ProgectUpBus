import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyDriver_1Page } from './emergency-driver-1';

@NgModule({
  declarations: [
    EmergencyDriver_1Page,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyDriver_1Page),
  ],
})
@Component({
  selector: 'page-emergency-driver-1',
  templateUrl: 'emergency-driver-1.html',
})
export class EmergencyDriver_1PageModule {}
