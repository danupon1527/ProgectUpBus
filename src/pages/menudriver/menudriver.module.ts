import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenudriverPage } from './menudriver';

@NgModule({
  declarations: [
    MenudriverPage,
  ],
  imports: [
    IonicPageModule.forChild(MenudriverPage),
  ],
})
@Component({
  selector: 'page-menudriver',
  templateUrl: 'menudriver.html',
})
export class MenudriverPageModule {}
