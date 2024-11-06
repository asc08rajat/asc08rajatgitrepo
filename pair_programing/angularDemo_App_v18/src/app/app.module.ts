import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {  RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    RouterOutlet
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
