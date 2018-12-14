import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AuthMiddlewareGuard} from './auth-middleware.guard';
import { ProfileComponent } from './profile/profile.component';
import { Profile } from 'selenium-webdriver/firefox';
const routes: Routes = [
  { path:'profile', component:ProfileComponent,canActivate: [AuthMiddlewareGuard]},
  { path: 'home', 
    component: HomeComponent
    },
   { path: 'register', component: RegisterComponent },
   { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
