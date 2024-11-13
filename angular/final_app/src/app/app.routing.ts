import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { HomeComponent } from "./home/home.component";

const routes:Routes=[
// {path:'',component:AppComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'list-user',component:ListUserComponent},
{path:'home',component:HomeComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]
}

)
export class AppRoutingModule{

}