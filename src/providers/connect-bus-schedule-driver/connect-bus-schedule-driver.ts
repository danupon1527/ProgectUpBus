import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectBusScheduleDriverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectBusScheduleDriverProvider {

  url="http://localhost/servicephp/loaddata_bus_schedule_driver.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectBusScheduleDriverProvider Provider');
  }
  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }

}
