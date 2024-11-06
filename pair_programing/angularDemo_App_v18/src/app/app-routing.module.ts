// import { NgModule } from '@angular/core';
import { RouterModule, Routes,RouterLink,RouterLinkActive } from '@angular/router';

import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  //route 1:login component
  
// {path :'', component:AppComponent},
{
  path :'login', component:LoginComponent
},
{
  path :'', component:HomeComponent
}
  

]
//Route 1:https://angular.dev/overview
//Route 2:https://angular.dev/installation
//Route 3:https://angular.dev/tutorials/learn-angular
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
