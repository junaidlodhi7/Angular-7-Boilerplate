import { Component } from '@angular/core';
import {SignUpService} from './sign-up.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = [];
  constructor(private signup:SignUpService){
    // this.signup.getTodo().subscribe(data => this.users =data );
  }
  model:any = {};

  onSubmit(){
    //alert(JSON.stringify(this.model));
    this.signup.login(this.model);
  }
  
}
