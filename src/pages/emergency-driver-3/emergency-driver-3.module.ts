import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmergencyDriver_3Page } from './emergency-driver-3';

@NgModule({
  declarations: [
    EmergencyDriver_3Page,
  ],
  imports: [
    IonicPageModule.forChild(EmergencyDriver_3Page),
  ],
})
@Component({
  selector: 'page-emergency-driver-3',
  templateUrl: 'emergency-driver-3.html',
})
export class EmergencyDriver_3PageModule {}
