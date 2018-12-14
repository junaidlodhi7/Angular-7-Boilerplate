import { Component } from '@angular/core';
import {SignUpService} from './sign-up.service';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public currentUser = null;
  constructor(private signup:SignUpService){
   
  }
  // model:any = {};

  // onSubmit(){
  //   console.log(JSON.stringify(this.model));
  //   this.signup.login(this.model).subscribe(response=>{
  //     console.log(response);
  //     this.currentUser = response.data;
  //     localStorage.setItem('token',response.token);
  //   })
  // }
  
}
