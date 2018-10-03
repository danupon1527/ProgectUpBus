import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers} from '@angular/http';

/*
  Generated class for the InsertRequestsAddAllProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InsertRequestsAddAllProvider {

  constructor(public http: HttpClient) {
    console.log('Hello InsertRequestsAddAllProvider Provider');
  }
  addReqUp(e1) : Promise<any>{
    
    let url="http://localhost/servicephp/insert_bus_requests_add_up_user.php";
    let reqUp = {emergency: e1};
    let request = this.http.post(url, reqUp);
    return request.toPromise();
   
  }
  addReqDown(e2) : Promise<any>{
    
    let url="http://localhost/servicephp/insert_bus_requests_add_down_user.php";
    let reqDown = {emergency2: e2};
    let request = this.http.post(url, reqDown);
    return request.toPromise();
   
  }
  addReqUpdorm(e3) : Promise<any>{
    
    let url="http://localhost/servicephp/insert_bus_requests_add_updorm_user.php";
    let reqUpdorm = {emergency3: e3};
    let request = this.http.post(url, reqUpdorm);
    return request.toPromise();
   
  }

}
