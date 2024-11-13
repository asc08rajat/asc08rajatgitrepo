import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet,Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";



@NgModule({
   
    declarations:[AppComponent,LoginComponent,ListEmpComponent,NavbarComponent,UpdateEmpComponent,HomeComponent,RegisterComponent],
    // imports:[HttpClientModule,BrowserModule],
    imports:[BrowserModule,RouterOutlet,AppRoutingModule,ReactiveFormsModule,HttpClientModule,CommonModule,FormsModule,FontAwesomeModule],
    bootstrap:[AppComponent]

})
export class AppModule{

}