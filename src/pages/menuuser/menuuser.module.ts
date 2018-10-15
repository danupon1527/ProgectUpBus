import { NgModule, Component } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuuserPage } from './menuuser';

@NgModule({
  declarations: [
    MenuuserPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuuserPage),
  ],
})
@Component({
  selector: 'page-menuuser',
  templateUrl: 'menuuser.html',
})
export class MenuuserPageModule {}
