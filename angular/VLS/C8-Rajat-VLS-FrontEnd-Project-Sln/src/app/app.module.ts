import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
//import { LoginNavComponent } from "./login-nav/login-nav.component";
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { AuthGuardService } from "./service/Auth-guard.service";
import { NewRegistrationComponent } from "./new-registration/new-registration.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeamsComponent } from "./teams/teams.component";

@NgModule({
    declarations:[AppComponent,LoginComponent,HomeComponent,NewRegistrationComponent,DashboardComponent,TeamsComponent],
    imports:[BrowserModule,RouterOutlet,AppRoutingModule,ReactiveFormsModule,FormsModule,CommonModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}