import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusRequestsAddPage } from './bus-requests-add';

@NgModule({
  declarations: [
    BusRequestsAddPage,
  ],
  imports: [
    IonicPageModule.forChild(BusRequestsAddPage),
  ],
})
export class BusRequestsAddPageModule {}
