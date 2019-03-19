import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RestApiService {

  constructor(private http: HttpClient) { }

  getHeaders(form?: boolean) {
    const token = localStorage.getItem('token');
    if(form) {
      return token ? new HttpHeaders({
        'Authorization': token
      }) : null;
    } else {
      return token ? new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      }) : null;
    }
    
  }

  get(link: string) {
    return this.http.get(link, { headers: this.getHeaders() }).toPromise();
  }

  post(link: string, body: any, form?: boolean) {
    return this.http.post(link, body, { headers: this.getHeaders(form) }).toPromise();
  }
}