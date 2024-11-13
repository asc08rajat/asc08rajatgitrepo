import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import {LoginComponent} from "./login/login.component"
import { ListEmpComponent } from "./list-emp/list-emp.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";
import { AuthGuardService } from "./service/auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { RegisterComponent } from "./register/register.component";

const routes :Routes=[
   
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'Login',component:LoginComponent},
    {path:'employees',component:ListEmpComponent, canActivate:[AuthGuardService]},
    {path:'update-emp/:id',component:UpdateEmpComponent}
]
@NgModule({
    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
}

)

export class AppRoutingModule{

}