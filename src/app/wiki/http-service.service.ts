import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { Result } from './wiki-result-interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  

  constructor(private http: HttpClient){
  }

  SearchTerm(term : string){
      return this.http.get<Result>("https://en.wikipedia.org/w/api.php",{
        params :{
          action : "query",
          format : "json",
          list : "search",
          utf8: "1",
          srsearch : term,
          origin : "*"
        }
      }).pipe(pluck('query','search'),catchError(err=>{
        console.log(err);
        return throwError(err); 
      }));
  }
}
