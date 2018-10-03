import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectEvaluateServiceBusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectEvaluateServiceBusProvider {

  url="http://localhost/servicephp/loaddata_evaluate_service_bus.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectEvaluateServiceBusProvider Provider');
  }
  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }
  add(data){
    return this.http.post(this.url,data);
  }

}
