import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeDrivePage } from './time-drive';

@NgModule({
  declarations: [
    TimeDrivePage,
  ],
  imports: [
    IonicPageModule.forChild(TimeDrivePage),
  ],
})
export class TimeDrivePageModule {}
