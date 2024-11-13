import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app.routing";
import { CommonModule } from "@angular/common";
import {  HttpClientModule } from "@angular/common/http";
import { RegisterComponent } from "./register/register.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
    declarations:[AppComponent,NavbarComponent,LoginComponent,RegisterComponent,ListUserComponent,HomeComponent],
    imports:[BrowserModule,RouterOutlet,FormsModule,ReactiveFormsModule,AppRoutingModule,CommonModule,HttpClientModule],
   
    bootstrap:[AppComponent]
})

export class AppModule{

}