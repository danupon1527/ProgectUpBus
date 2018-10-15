import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusAddDriver_1Page } from './bus-add-driver-1';

@NgModule({
  declarations: [
    BusAddDriver_1Page,
  ],
  imports: [
    IonicPageModule.forChild(BusAddDriver_1Page),
  ],
})
@Component({
  selector: 'page-bus-add-driver-1',
  templateUrl: 'bus-add-driver-1.html',
})
export class BusAddDriver_1PageModule {}
