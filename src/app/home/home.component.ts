import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private register: RegisterComponent,
              private router :Router) { }

  ngOnInit() {
    alert('HI');
  }


  logout(){
    this.register.token = null;
    this.register.currentUser=null;
    localStorage.removeItem('token');
    this.router.navigate['register'];
    alert('routing');
  }


}
