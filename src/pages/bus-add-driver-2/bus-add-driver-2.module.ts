import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusAddDriver_2Page } from './bus-add-driver-2';

@NgModule({
  declarations: [
    BusAddDriver_2Page,
  ],
  imports: [
    IonicPageModule.forChild(BusAddDriver_2Page),
  ],
})
@Component({
  selector: 'page-bus-add-driver-2',
  templateUrl: 'bus-add-driver-2.html',
})
export class BusAddDriver_2PageModule {}
