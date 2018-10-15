import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluateServiceDriverPage } from './evaluate-service-driver';

@NgModule({
  declarations: [
    EvaluateServiceDriverPage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluateServiceDriverPage),
  ],
})
@Component({
  selector: 'page-evaluate-service-driver',
  templateUrl: 'evaluate-service-driver.html',
})
export class EvaluateServiceDriverPageModule {}
