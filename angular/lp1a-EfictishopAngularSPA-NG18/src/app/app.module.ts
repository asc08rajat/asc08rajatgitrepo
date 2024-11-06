import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, RouterOutlet,Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { CommonModule } from "@angular/common";



@NgModule({
   
    declarations:[AppComponent,LoginComponent,ListEmpComponent],
    // imports:[HttpClientModule,BrowserModule],
    imports:[BrowserModule,RouterOutlet,AppRoutingModule,ReactiveFormsModule,HttpClientModule,CommonModule],
    bootstrap:[AppComponent]

})
export class AppModule{

}