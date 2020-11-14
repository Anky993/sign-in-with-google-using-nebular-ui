import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  userDetails(data) {
    let params = new HttpParams();
    params = params.append('access_token', data);
    return this.http.get<any>(`https://www.googleapis.com/oauth2/v3/userinfo`, { params: params })
  }


}
