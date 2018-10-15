import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DivideJourneyPage } from './divide-journey';

@NgModule({
  declarations: [
    DivideJourneyPage,
  ],
  imports: [
    IonicPageModule.forChild(DivideJourneyPage),
  ],
})
@Component({
  selector: 'page-divide-journey',
  templateUrl: 'divide-journey.html',
})
export class DivideJourneyPageModule {}
