import { NgModule, Component } from '@angular/core';
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
@Component({
  selector: 'page-bus-requests-add',
  templateUrl: 'bus-requests-add.html',
})
export class BusRequestsAddPageModule {}
