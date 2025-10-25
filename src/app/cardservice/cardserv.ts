import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Cardserv {
  constructor(private http:HttpClient){}


  
  getData():Observable<Cardserv[]> {
    // return this.http.get<Cardserv[]>('https://www.reddit.com/r/Angular2.json');
    return this.http.get<Cardserv[]>('https://oauth.reddit.com/r/Angular2.json');
  }
}
