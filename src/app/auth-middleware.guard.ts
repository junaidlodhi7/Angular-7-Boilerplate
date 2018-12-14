import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterComponent} from './register/register.component';
import {Router} from '@angular/router';
import {SignUpService} from './sign-up.service';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class AuthMiddlewareGuard implements CanActivate {
  private status;
  constructor(private myRoute: Router, 
              private signup:SignUpService,
              private register:RegisterComponent){
              }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.checklogin(); }
      checklogin(): Promise<boolean>{
       return new Promise((resolve,reject)=>{
         this.signup.verfiyToken().
         then((res)=>{console.log('guard = resolve(true)' + res);resolve(true)}).
         catch((err)=>{console.log('guard = reject(false)'+ err);resolve(false)});
       })
      }
 
  
}

