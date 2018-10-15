import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluateServicePage } from './evaluate-service';

@NgModule({
  declarations: [
    EvaluateServicePage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluateServicePage),
  ],
})
@Component({
  selector: 'page-evaluate-service',
  templateUrl: 'evaluate-service.html',
})
export class EvaluateServicePageModule {}
