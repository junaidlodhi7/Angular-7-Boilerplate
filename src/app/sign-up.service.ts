import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserModel} from './models/userModel';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http:HttpClient) { }

  
  // getTodo() : Observable<UserModel[]> {
  //   return this.http.get<UserModel[]>('https://jsonplaceholder.typicode.com/todos/1');
  
  // }

  login(emailandpassword){
    return this.http.post('https://api-imfo.herokuapp.com/v1/login', emailandpassword)
    .map(
      res => {
        console.log(res.data);
        console.log(res.token);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.data));
      }
    );
  }
 
}
