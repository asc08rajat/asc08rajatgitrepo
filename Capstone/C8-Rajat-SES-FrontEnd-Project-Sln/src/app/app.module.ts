import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { RouterModule, RouterOutlet } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TeamsComponent } from "./teams/teams.component";
import { PlayersComponent } from "./players/players.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { MatchesComponent } from "./matches/matches.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { RegisterComponent } from "./register/register.component";

// import { RegistrationListComponent } from "./registration-list/registration-list.component";


@NgModule({
    declarations:[AppComponent,NavbarComponent,LoginComponent,RegisterComponent,DashboardComponent,TeamsComponent,PlayersComponent,TournamentsComponent,MatchesComponent,TicketsComponent],
    imports: [BrowserModule, RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule,AppRoutingModule,RouterModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}