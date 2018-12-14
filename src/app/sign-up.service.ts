import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from './models/userModel';
import { map } from 'rxjs/operators';
import {HttpHeaders} from "@angular/common/http";
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders();
  getHeaders(token) {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': token
      })
    };
  }


  login (user){
    return this.http.post<any>('https://api-imfo.herokuapp.com/v1/login', { email: user.email, password: user.password });
  }


  verfiyToken(){
    return new Promise((resolve,reject)=>{
      let token = localStorage.getItem('token') || null;
      return this.http.get<any>('https://api-imfo.herokuapp.com/v1/me',this.getHeaders(token)).toPromise().then(response => {
        resolve(true);
      }).catch(() => reject(false));
    })
  }

}


