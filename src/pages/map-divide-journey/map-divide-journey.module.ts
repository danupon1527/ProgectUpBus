import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapDivideJourneyPage } from './map-divide-journey';

@NgModule({
  declarations: [
    MapDivideJourneyPage,
  ],
  imports: [
    IonicPageModule.forChild(MapDivideJourneyPage),
  ],
})
@Component({
  selector: 'page-map-divide-journey',
  templateUrl: 'map-divide-journey.html',
})
export class MapDivideJourneyPageModule {}
