import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConnectServiveIntroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConnectServiveIntroProvider {
  url="http://localhost/servicephp/loaddata_information.php"

  constructor(public http: HttpClient) {
    console.log('Hello ConnectServiveIntroProvider Provider');
  }
  getData(){
    return this.http.get(this.url);
    //return this.http.get(this.URL1);
  }

}
