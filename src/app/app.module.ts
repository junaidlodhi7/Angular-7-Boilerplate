import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {SignUpService} from './sign-up.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {AuthMiddlewareGuard} from './auth-middleware.guard';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SignUpService,AuthMiddlewareGuard,RegisterComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
