import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusScheduleDriverPage } from './bus-schedule-driver';

@NgModule({
  declarations: [
    BusScheduleDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(BusScheduleDriverPage),
  ],
})
export class BusScheduleDriverPageModule {}
