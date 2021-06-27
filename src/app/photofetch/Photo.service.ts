import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, observable, Subject } from 'rxjs';
import { pluck, catchError, tap } from 'rxjs/operators';

interface Image{
    regular : string
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  subject = new BehaviorSubject<Image>({regular : ""});

  obs = this.subject as Observable<Image>;

  constructor(private http : HttpClient) { }

  FetchImage() : Observable<any> {
   return this.http.get<Image>("https://api.unsplash.com/photos/random", {
      params :{
        client_id :"SnWdVxSVPAhxi9kxpYZLbngrt93qC9Lxim8-aOSXpVU"
      }
    }).pipe(pluck('urls'), tap((val)=> this.subject.next(val)));
  }
}
