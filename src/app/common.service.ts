import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  saveUser(user) {
    return this.http.post('http://localhost:8080/api/SaveUser/', user)
            .map((response: Response) => response.json());
  }

  GetUser() {
    return this.http.get('http://localhost:8080/api/getUser/')
            .map((response: Response) => response.json());
  }

  GetImage() {
    return this.http.get('http://localhost:8080/api/profileImage')
            .map((response: Response) => response);
  }

  GetClients() {
    return this.http.get('http://localhost:8080/api/getClients')
            .map((response: Response) => response.json());
  }

  GetAum() {
    return this.http.get('http://localhost:8080/api/getaum')
            .map((response: Response) => response.json());
  }
  GetInvestorProfile() {
    return this.http.get('http://localhost:8080/api/getinvestorprofile')
            .map((response: Response) => response.json());
  }
  GetInvestorPreferences() {
    return this.http.get('http://localhost:8080/api/getinvestorpref')
            .map((response: Response) => response.json());
  }

}
