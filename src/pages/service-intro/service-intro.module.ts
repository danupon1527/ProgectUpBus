import { NgModule } from '@angular/core';
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
export class ServiceIntroPageModule {}
