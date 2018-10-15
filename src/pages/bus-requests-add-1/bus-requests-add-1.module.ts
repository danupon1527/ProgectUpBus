import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusRequestsAdd_1Page } from './bus-requests-add-1';

@NgModule({
  declarations: [
    BusRequestsAdd_1Page,
  ],
  imports: [
    IonicPageModule.forChild(BusRequestsAdd_1Page),
  ],
})
@Component({
  selector: 'page-bus-requests-add-1',
  templateUrl: 'bus-requests-add-1.html',
})
export class BusRequestsAdd_1PageModule {}
