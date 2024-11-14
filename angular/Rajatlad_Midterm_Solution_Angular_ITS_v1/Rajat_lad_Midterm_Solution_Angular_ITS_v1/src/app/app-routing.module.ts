import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { IssueListComponent } from "./issue-list/issue-list.component";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";
import { AuthGuardService } from "./services/auth-gauard.service";
import { AddissueComponent } from "./add-issue/add-issue.component";

const routes:Routes=[
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'issue-list',component:IssueListComponent ,canActivate:[AuthGuardService]},
    {path:'update-issue/:id',component:UpdateIssueComponent},
    {path:'addissue',component:AddissueComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    bootstrap:[AppComponent]

})
export class AppRouting{

}