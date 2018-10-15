import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusRequestsAdd_3Page } from './bus-requests-add-3';

@NgModule({
  declarations: [
    BusRequestsAdd_3Page,
  ],
  imports: [
    IonicPageModule.forChild(BusRequestsAdd_3Page),
  ],
})
@Component({
  selector: 'page-bus-requests-add-3',
  templateUrl: 'bus-requests-add-3.html',
})
export class BusRequestsAdd_3PageModule {}
