import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { AppRouting } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IssueListComponent } from "./issue-list/issue-list.component";
import { CommonModule } from "@angular/common";
import { UpdateIssueComponent } from "./update-issue/update-issue.component";
import { AddissueComponent } from "./add-issue/add-issue.component";



@NgModule({
    declarations:[AppComponent,NavbarComponent,HomeComponent,LoginComponent,IssueListComponent,UpdateIssueComponent,AddissueComponent],
    imports:[BrowserModule,HttpClientModule,RouterOutlet,RouterModule,AppRouting,ReactiveFormsModule,CommonModule,FormsModule],
    bootstrap:[AppComponent]

})
export class AppModule{

}