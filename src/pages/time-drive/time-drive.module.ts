import { NgModule, Component } from '@angular/core';
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
@Component({
  selector: 'page-time-drive',
  templateUrl: 'time-drive.html',
})
export class TimeDrivePageModule {}
