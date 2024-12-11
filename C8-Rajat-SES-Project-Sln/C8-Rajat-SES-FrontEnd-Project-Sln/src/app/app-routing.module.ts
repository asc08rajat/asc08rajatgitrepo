import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { MatchesComponent } from './matches/matches.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AuthGuardService } from './service/Authguard.service';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate:[AuthGuardService],
      children: [
        { path: '', redirectTo: 'tournaments', pathMatch: 'full' },
        { path: 'teams', component: TeamsComponent,},
        { path: 'players', component: PlayersComponent },
        { path: 'tournaments', component: TournamentsComponent },
        { path: 'matches', component: MatchesComponent },
        { path: 'tickets', component: TicketsComponent }
        
      ],
    },
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}