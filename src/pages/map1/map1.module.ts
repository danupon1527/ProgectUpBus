import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Map1Page } from './map1';

@NgModule({
  declarations: [
    Map1Page,
  ],
  imports: [
    IonicPageModule.forChild(Map1Page),
  ],
})
@Component({
  selector: 'page-map1',
  templateUrl: 'map1.html',
})
export class Map1PageModule {}
