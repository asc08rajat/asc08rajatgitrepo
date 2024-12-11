import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NewRegistrationComponent } from "./new-registration/new-registration.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeamsComponent } from "./teams/teams.component";

const root:Routes=[
    {path:'',component:DashboardComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:NewRegistrationComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'teams',component:TeamsComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(root)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})
export class AppRoutingModule{

} 