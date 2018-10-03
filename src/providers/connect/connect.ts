import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectProvider {

  url="http://localhost/servicephp/loaddata_user.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectProvider Provider');
  }

  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }

}
