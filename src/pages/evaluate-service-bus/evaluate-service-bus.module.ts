import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluateServiceBusPage } from './evaluate-service-bus';

@NgModule({
  declarations: [
    EvaluateServiceBusPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluateServiceBusPage),
  ],
})
export class EvaluateServiceBusPageModule {}
