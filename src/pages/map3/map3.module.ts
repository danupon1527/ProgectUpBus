import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Map3Page } from './map3';

@NgModule({
  declarations: [
    Map3Page,
  ],
  imports: [
    IonicPageModule.forChild(Map3Page),
  ],
})
@Component({
  selector: 'page-map3',
  templateUrl: 'map3.html',
})
export class Map3PageModule {}
