import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectUserDriverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectUserDriverProvider {

  url="http://localhost/servicephp/loaddata_driver.php"
  urlS="http://localhost/servicephp/loaddata_staff.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectUserDriverProvider Provider');
  }

  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }
  getDataS(){
    return this.http.get(this.urlS);
    //return this.http.get(this.URL1);
  }

}
