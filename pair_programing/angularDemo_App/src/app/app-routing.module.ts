// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';

const routes:Routes=[{
  //route 1:login component
  path :'', component:LoginComponent,
}]
//Route 1:https://angular.dev/overview
//Route 2:https://angular.dev/installation
//Route 3:https://angular.dev/tutorials/learn-angular
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
