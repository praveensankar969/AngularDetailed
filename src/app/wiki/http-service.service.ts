import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Result } from './wiki-result-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient){
  }

  SearchTerm(term : string) : Observable<Result>{
      return this.http.get<Result>("https://en.wikipedia.org/w/api.php",{
        params :{
          action : "query",
          format : "json",
          list : "search",
          utf8: "1",
          srsearch : term,
          origin : "*"
        }
      });
  }
}
