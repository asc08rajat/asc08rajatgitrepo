// import { Component, OnInit } from '@angular/core';
// import { Tournament } from '../model/tournament.model';
// import { TournamentService } from '../service/tournament.service';

// @Component({
//   selector: 'app-tournaments',
//   templateUrl: './tournaments.component.html',
//   styleUrls: ['./tournaments.component.css']
// })
// export class TournamentsComponent implements OnInit {
//   tournaments: Tournament[] = [];
//   filteredTournaments: Tournament[] = [];
//   searchQuery: string = '';
//   showDialog: boolean = false;
//   isUpdateMode: boolean = false;
//   tournamentData: Tournament = this.getEmptyTournament();

//   constructor(private tournamentService: TournamentService) {}

//   ngOnInit(): void {
//     this.loadTournaments();
//   }

//   loadTournaments() {
//     this.tournamentService.getTournaments().subscribe((data) => {
//       this.tournaments = data;
//       this.filteredTournaments = data; // Initialize filtered list
//     });
//   }

//   searchTournaments() {
//     if (this.searchQuery) {
//       this.filteredTournaments = this.tournaments.filter(
//         (tournament) =>
//           tournament.tournament_name
//             .toLowerCase()
//             .includes(this.searchQuery.toLowerCase()) ||
//           tournament.tournament_id.toString().includes(this.searchQuery)
//       );
//     } else {
//       this.filteredTournaments = this.tournaments;
//     }
//   }

//   openDialog(tournament?: Tournament) {
//     if (tournament) {
//       this.isUpdateMode = true;
//       this.tournamentData = { ...tournament };
//     } else {
//       this.isUpdateMode = false;
//       this.tournamentData = this.getEmptyTournament();
//     }
//     this.showDialog = true;
//   }

//   closeDialog() {
//     this.showDialog = false;
//   }

//   saveOrUpdateTournament() {
//     if (this.isUpdateMode) {
//       this.tournamentService
//         .updateTournament(this.tournamentData.id, this.tournamentData)
//         .subscribe(() => {
//           this.closeDialog();
//           this.loadTournaments();
//         });
//     } else {
//       this.tournamentService.createTournament(this.tournamentData).subscribe(() => {
//         this.closeDialog();
//         this.loadTournaments();
//       });
//     }
//   }

//   deleteTournament(id: number) {
//     this.tournamentService.deleteTournament(id).subscribe(() => {
//       this.loadTournaments();
//     });
//   }

//   private getEmptyTournament(): Tournament {
//     return {
//       id: 0,
//       tournament_id: null,
//       tournament_name: '',
//       start_date: '',
//       end_date: '',
//       location: ''
//     };
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Tournament } from '../model/tournament.model';
import { TournamentService } from '../service/tournament.service';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css']
})
export class TournamentsComponent implements OnInit {
  tournaments: Tournament[] = [];
  filteredTournaments: Tournament[] = [];
  searchQuery: string = '';
  showDialog: boolean = false;
  isUpdateMode: boolean = false;
  tournamentData: Tournament = this.getEmptyTournament();

  constructor(private tournamentService: TournamentService) {}

  ngOnInit(): void {
    this.loadTournaments();
  }

  loadTournaments() {
    this.tournamentService.getTournaments().subscribe((data) => {
      this.tournaments = data;
      this.filteredTournaments = data; // Initialize filtered list
    });
  }

  searchTournaments() {
    if (this.searchQuery) {
      this.filteredTournaments = this.tournaments.filter(
        (tournament) =>
          tournament.tournament_name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          tournament.tournament_id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredTournaments = this.tournaments;
    }
  }

  openDialog(tournament?: Tournament) {
    if (tournament) {
      this.isUpdateMode = true;
      this.tournamentData = { ...tournament };
    } else {
      this.isUpdateMode = false;
      this.tournamentData = this.getEmptyTournament();
      this.tournamentData.tournament_id = this.generateTournamentId(); // Generate tournament_id here
    }
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveOrUpdateTournament() {
    if (this.isUpdateMode) {
      this.tournamentService
        .updateTournament(this.tournamentData.id, this.tournamentData)
        .subscribe(() => {
          this.closeDialog();
          this.loadTournaments();
        });
    } else {
      this.tournamentService.createTournament(this.tournamentData).subscribe(() => {
        this.closeDialog();
        this.loadTournaments();
      });
    }
  }

  deleteTournament(id: number) {
    this.tournamentService.deleteTournament(id).subscribe(() => {
      this.loadTournaments();
    });
  }

  private getEmptyTournament(): Tournament {
    return {
      id: 0,
      tournament_id: '',
      tournament_name: '',
      start_date: '',
      end_date: '',
      location: ''
    };
  }

  private generateTournamentId(): string {
    // Find the highest existing tournament ID in the format "TXXXX"
    const maxId = this.tournaments
      .map((tournament) => parseInt(tournament.tournament_id.slice(1), 10)) // Extract numeric part
      .filter((num) => !isNaN(num)) // Filter out invalid numbers
      .reduce((max, current) => Math.max(max, current), 0);

    const nextId = maxId + 1;
    return `T${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
  }
}
