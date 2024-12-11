// import { Component, OnInit } from '@angular/core';
// import { Teams } from '../model/teams.model';
// import { TeamsService } from '../service/teams.service';

// @Component({
//   selector: 'app-teams',
//   templateUrl: './teams.component.html',
//   styleUrls: ['./teams.component.css']
// })
// export class TeamsComponent implements OnInit {
//   teams: Teams[] = [];
//   filteredTeams: Teams[] = [];
//   searchQuery: string = '';
//   showDialog: boolean = false;
//   isUpdateMode: boolean = false;
//   teamData: Teams = this.getEmptyTeam();

//   constructor(private teamsService: TeamsService) {}

//   ngOnInit(): void {
//     this.loadTeams();
//   }

//   loadTeams() {
//     this.teamsService.getTeams().subscribe((data) => {
//       this.teams = data;
//       this.filteredTeams = data;
//     });
//   }

//   openDialog(team?: Teams) {
//     if (team) {
//       this.isUpdateMode = true;
//       this.teamData = { ...team };
//     } else {
//       this.isUpdateMode = false;
//       this.teamData = this.getEmptyTeam();
//     }
//     this.showDialog = true;
//   }

//   closeDialog() {
//     this.showDialog = false;
//   }

//   saveOrUpdateTeam() {
//     if (this.isUpdateMode) {
//       this.teamsService.updateTeam(this.teamData.id, this.teamData).subscribe(() => {
//         this.closeDialog();
//         this.loadTeams();
//       });
//     } else {
//       this.teamsService.createTeam(this.teamData).subscribe(() => {
//         this.closeDialog();
//         this.loadTeams();
//       });
//     }
//   }

//   deleteTeam(id: number) {
//     this.teamsService.deleteTeam(id).subscribe(() => {
//       this.loadTeams();
//     });
//   }

//   searchTeams() {
//     if (this.searchQuery) {
//       this.filteredTeams = this.teams.filter(
//         (team) =>
//           team.team_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//           team.team_id.toString().includes(this.searchQuery)
//       );
//     } else {
//       this.filteredTeams = this.teams;
//     }
//   }

//   private getEmptyTeam(): Teams {
//     return {
//       id: 0,
//       team_id: null,
//       team_name: '',
//       team_country: '',
//       team_coach: '',
//       team_captain: ''
//     };
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Teams } from '../model/teams.model';
import { TeamsService } from '../service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: Teams[] = [];
  filteredTeams: Teams[] = [];
  searchQuery: string = '';
  showDialog: boolean = false;
  isUpdateMode: boolean = false;
  teamData: Teams = this.getEmptyTeam();

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.teamsService.getTeams().subscribe((data) => {
      this.teams = data;
      this.filteredTeams = data;
    });
  }

  openDialog(team?: Teams) {
    if (team) {
      this.isUpdateMode = true;
      this.teamData = { ...team };
    } else {
      this.isUpdateMode = false;
      this.teamData = this.getEmptyTeam();
      this.teamData.team_id = this.generateTeamId(); // Generate new team_id
    }
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveOrUpdateTeam() {
    if (this.isUpdateMode) {
      this.teamsService.updateTeam(this.teamData.id, this.teamData).subscribe(() => {
        this.closeDialog();
        this.loadTeams();
      });
    } else {
      this.teamsService.createTeam(this.teamData).subscribe(() => {
        this.closeDialog();
        this.loadTeams();
      });
    }
  }

  deleteTeam(id: number) {
    this.teamsService.deleteTeam(id).subscribe(() => {
      this.loadTeams();
    });
  }

  searchTeams() {
    if (this.searchQuery) {
      this.filteredTeams = this.teams.filter(
        (team) =>
          team.team_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          team.team_id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredTeams = this.teams;
    }
  }

  private getEmptyTeam(): Teams {
    return {
      id: 0,
      team_id: '',
      team_name: '',
      team_country: '',
      team_coach: '',
      team_captain: ''
    };
  }

  private generateTeamId(): string {
    // Find the highest existing team ID in the format "TXXXX"
    const maxId = this.teams
      .map((team) => parseInt(team.team_id.slice(1), 10)) // Extract numeric part
      .filter((num) => !isNaN(num)) // Filter out invalid numbers
      .reduce((max, current) => Math.max(max, current), 0);

    const nextId = maxId + 1;
    return `T${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
  }
}
