import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { LoginNavComponent } from "./login-nav/login-nav.component";
import { LoginComponent } from "./login/login.component";
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[AppComponent,LoginNavComponent,LoginComponent],
    imports:[BrowserModule,RouterOutlet,AppRoutingModule,ReactiveFormsModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}