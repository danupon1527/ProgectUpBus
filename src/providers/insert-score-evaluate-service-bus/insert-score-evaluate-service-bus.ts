import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers} from '@angular/http';

/*
  Generated class for the InsertScoreEvaluateServiceBusProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InsertScoreEvaluateServiceBusProvider {

  // url="http://localhost/servicephp/insert_score_evaluate_service_bus.php"

  constructor(public http: HttpClient) {
    console.log('Hello InsertScoreEvaluateServiceBusProvider Provider');
  }

  addSbus(s1, s2) : Promise<any>{
    
    let url="http://localhost/servicephp/insert_score_evaluate_service_bus.php";
    let ScoreAll = {score1: s1,score2: s2};
    let request = this.http.post(url, ScoreAll);
    return request.toPromise();
   
  }
  addSdriver(sd1, sd2) : Promise<any>{
    
    let url="http://localhost/servicephp/insert_score_evaluate_service_driver.php";
    let ScoreAllD = {score1: sd1,score2: sd2};
    let request = this.http.post(url, ScoreAllD);
    return request.toPromise();
   
  }

}
