import { Component, OnInit } from '@angular/core';
import {SignUpService} from '../sign-up.service';
import {Router} from '@angular/router';
import {AuthMiddlewareGuard} from '../auth-middleware.guard';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public currentUser = null;
  public token =null;
  public verify;
  constructor(private signup:SignUpService, private myrouter:Router){
   
  }
  model:any = {};

  onSubmit(){
   // console.log(JSON.stringify(this.model));
    this.signup.login(this.model).subscribe(response=>{
      this.currentUser = response.data;
      localStorage.setItem('token',response.token);
      this.token = response.token;
      console.log('goto home now');
      this.myrouter.navigate(["home"]);
      
    });
  }



}



