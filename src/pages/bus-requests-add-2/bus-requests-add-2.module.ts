import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusRequestsAdd_2Page } from './bus-requests-add-2';

@NgModule({
  declarations: [
    BusRequestsAdd_2Page,
  ],
  imports: [
    IonicPageModule.forChild(BusRequestsAdd_2Page),
  ],
})
@Component({
  selector: 'page-bus-requests-add-2',
  templateUrl: 'bus-requests-add-2.html',
})
export class BusRequestsAdd_2PageModule {}
