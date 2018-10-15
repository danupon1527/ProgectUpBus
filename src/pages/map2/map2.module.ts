import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Map2Page } from './map2';

@NgModule({
  declarations: [
    Map2Page,
  ],
  imports: [
    IonicPageModule.forChild(Map2Page),
  ],
})
@Component({
  selector: 'page-map2',
  templateUrl: 'map2.html',
})
export class Map2PageModule {}
