import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusAddDriverPage } from './bus-add-driver';

@NgModule({
  declarations: [
    BusAddDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(BusAddDriverPage),
  ],
})
export class BusAddDriverPageModule {}
