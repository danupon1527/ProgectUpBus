import { NgModule, Component } from '@angular/core';
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
@Component({
  selector: 'page-emergency-driver',
  templateUrl: 'emergency-driver.html',
})
export class EmergencyDriverPageModule {}
