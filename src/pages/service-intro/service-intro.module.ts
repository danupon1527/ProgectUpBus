import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceIntroPage } from './service-intro';

@NgModule({
  declarations: [
    ServiceIntroPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceIntroPage),
  ],
})
@Component({
  selector: 'page-service-intro',
  templateUrl: 'service-intro.html',
})
export class ServiceIntroPageModule {}
