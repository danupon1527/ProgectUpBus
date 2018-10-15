import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomestaffPage } from './homestaff';

@NgModule({
  declarations: [
    HomestaffPage,
  ],
  imports: [
    IonicPageModule.forChild(HomestaffPage),
  ],
})
@Component({
  selector: 'page-homestaff',
  templateUrl: 'homestaff.html',
})
export class HomestaffPageModule {}
