import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomeUserPage } from '../pages/home-user/home-user';
import { MenuuserPage } from '../pages/menuuser/menuuser';
import { ServiceIntroPage } from '../pages/service-intro/service-intro';
import { EvaluateServicePage } from '../pages/evaluate-service/evaluate-service';
import { BusRequestsAddPage } from '../pages/bus-requests-add/bus-requests-add';
import { DivideJourneyPage } from '../pages/divide-journey/divide-journey';
import { EvaluateServiceBusPage } from '../pages/evaluate-service-bus/evaluate-service-bus';
import { EvaluateServiceDriverPage } from '../pages/evaluate-service-driver/evaluate-service-driver';
import { HomeDriverPage } from '../pages/home-driver/home-driver';
import { MenudriverPage } from '../pages/menudriver/menudriver';
import { TimeDrivePage } from '../pages/time-drive/time-drive';
import { BusScheduleDriverPage } from '../pages/bus-schedule-driver/bus-schedule-driver';
import { EmergencyDriverPage } from '../pages/emergency-driver/emergency-driver';
import { BusAddDriverPage } from '../pages/bus-add-driver/bus-add-driver';
import { EmergencyDriver_1Page } from '../pages/emergency-driver-1/emergency-driver-1';
import { EmergencyDriver_2Page } from '../pages/emergency-driver-2/emergency-driver-2';
import { EmergencyDriver_3Page } from '../pages/emergency-driver-3/emergency-driver-3';
import { BusAddDriver_1Page } from '../pages/bus-add-driver-1/bus-add-driver-1';
import { BusAddDriver_2Page } from '../pages/bus-add-driver-2/bus-add-driver-2';
import { BusAddDriver_3Page } from '../pages/bus-add-driver-3/bus-add-driver-3';
import { ConnectProvider } from '../providers/connect/connect';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ConnectUserDriverProvider } from '../providers/connect-user-driver/connect-user-driver';
import { ConnectServiveIntroProvider } from '../providers/connect-servive-intro/connect-servive-intro';
import { ConnectEvaluateServiceBusProvider } from '../providers/connect-evaluate-service-bus/connect-evaluate-service-bus';
import { InsertScoreEvaluateServiceBusProvider } from '../providers/insert-score-evaluate-service-bus/insert-score-evaluate-service-bus';
import { ConnectEvaluateServiceDriverProvider } from '../providers/connect-evaluate-service-driver/connect-evaluate-service-driver';
import { BusRequestsAdd_1Page } from '../pages/bus-requests-add-1/bus-requests-add-1';
import { BusRequestsAdd_2Page } from '../pages/bus-requests-add-2/bus-requests-add-2';
import { BusRequestsAdd_3Page } from '../pages/bus-requests-add-3/bus-requests-add-3';
import { Geolocation } from '@ionic-native/geolocation';
import { SettingsHomePage } from '../pages/settings-home/settings-home';
import { ConnectBusScheduleDriverProvider } from '../providers/connect-bus-schedule-driver/connect-bus-schedule-driver';
import { MapDivideJourneyPage } from '../pages/map-divide-journey/map-divide-journey';
import { Map1Page } from '../pages/map1/map1';
import { Map2Page } from '../pages/map2/map2';
import { Map3Page } from '../pages/map3/map3';
import { InsertRequestsAddAllProvider } from '../providers/insert-requests-add-all/insert-requests-add-all';
import { HomestaffPage } from '../pages/homestaff/homestaff';
import { BusAddDriverPageModule } from '../pages/bus-add-driver/bus-add-driver.module';








@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    HomeUserPage,
    MenuuserPage,
    ServiceIntroPage,
    EvaluateServicePage,
    BusRequestsAddPage,
    DivideJourneyPage,
    EvaluateServiceBusPage,
    EvaluateServiceDriverPage,
    HomeDriverPage,
    MenudriverPage,
    TimeDrivePage,
    BusScheduleDriverPage,
    EmergencyDriverPage,
    BusAddDriverPage,
    EmergencyDriver_1Page,
    EmergencyDriver_2Page,
    EmergencyDriver_3Page,
    BusAddDriver_1Page,
    BusAddDriver_2Page,
    BusAddDriver_3Page,
    BusRequestsAdd_1Page,
    BusRequestsAdd_2Page,
    BusRequestsAdd_3Page,
    SettingsHomePage,
    MapDivideJourneyPage,
    Map1Page,
    Map2Page,
    Map3Page,
    HomestaffPage,
    BusAddDriverPageModule
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    HomeUserPage,
    MenuuserPage,
    ServiceIntroPage,
    EvaluateServicePage,
    BusRequestsAddPage,
    DivideJourneyPage,
    EvaluateServiceBusPage,
    EvaluateServiceDriverPage,
    HomeDriverPage,
    MenudriverPage,
    TimeDrivePage,
    BusScheduleDriverPage,
    EmergencyDriverPage,
    BusAddDriverPage,
    EmergencyDriver_1Page,
    EmergencyDriver_2Page,
    EmergencyDriver_3Page,
    BusAddDriver_1Page,
    BusAddDriver_2Page,
    BusAddDriver_3Page,
    BusRequestsAdd_1Page,
    BusRequestsAdd_2Page,
    BusRequestsAdd_3Page,
    SettingsHomePage,
    MapDivideJourneyPage,
    Map1Page,
    Map2Page,
    Map3Page,
    HomestaffPage,
    BusAddDriverPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConnectProvider,
    ConnectUserDriverProvider,
    ConnectServiveIntroProvider,
    ConnectEvaluateServiceBusProvider,
    InsertScoreEvaluateServiceBusProvider,
    ConnectEvaluateServiceDriverProvider,
    Geolocation,
    ConnectBusScheduleDriverProvider,
    InsertRequestsAddAllProvider
    
  ]
})
export class AppModule {}
