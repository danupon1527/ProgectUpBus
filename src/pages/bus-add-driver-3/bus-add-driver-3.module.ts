import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusAddDriver_3Page } from './bus-add-driver-3';

@NgModule({
  declarations: [
    BusAddDriver_3Page,
  ],
  imports: [
    IonicPageModule.forChild(BusAddDriver_3Page),
  ],
})
@Component({
  selector: 'page-bus-add-driver-3',
  templateUrl: 'bus-add-driver-3.html',
})
export class BusAddDriver_3PageModule {}
