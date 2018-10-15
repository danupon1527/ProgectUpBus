import { NgModule, Component } from '@angular/core';
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
@Component({
  selector: 'page-bus-schedule-driver',
  templateUrl: 'bus-schedule-driver.html',
})
export class BusScheduleDriverPageModule {}
