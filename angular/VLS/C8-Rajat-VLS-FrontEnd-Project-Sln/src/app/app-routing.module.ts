import { Injectable, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

const root:Routes=[
    // {path:'',component:AppComponent},
    {path:'login',component:LoginComponent}
]


@NgModule({
    imports:[RouterModule.forRoot(root)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
})
export class AppRoutingModule{

} 