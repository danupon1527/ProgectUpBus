import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectEvaluateServiceDriverProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectEvaluateServiceDriverProvider {

  url="http://localhost/servicephp/loaddata_evaluate_service_driver.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectEvaluateServiceDriverProvider Provider');
  }
  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }

}
