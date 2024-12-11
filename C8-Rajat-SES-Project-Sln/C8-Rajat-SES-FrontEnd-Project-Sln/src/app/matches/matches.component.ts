// import { Component, OnInit } from '@angular/core';
// import { Match } from '../model/matches.model';
// import { MatchService } from '../service/matches.service';


// @Component({
//   selector: 'app-matches',
//   templateUrl: './matches.component.html',
//   styleUrls: ['./matches.component.css']
// })
// export class MatchesComponent implements OnInit {
//   matches: Match[] = [];
//   filteredMatches: Match[] = [];
//   searchQuery: string = '';
//   showDialog: boolean = false;
//   isUpdateMode: boolean = false;
//   matchData: Match = this.getEmptyMatch();
//   submitted = false;

//   constructor(private matchService: MatchService) {}

//   ngOnInit(): void {
//     this.loadMatches();
//   }

//   loadMatches() {
//     this.matchService.getMatches().subscribe((data) => {
//       this.matches = data;
//       this.filteredMatches = data;
//     });
//   }

//   openDialog(match?: Match) {
//     this.submitted = false;
//     if (match) {
//       this.isUpdateMode = true;
//       this.matchData = { ...match };
//     } else {
//       this.isUpdateMode = false;
//       this.matchData = this.getEmptyMatch();
//     }
//     this.showDialog = true;
//   }

//   closeDialog() {
//     this.showDialog = false;
//   }

//   saveOrUpdateMatch() {
//     if (this.isUpdateMode) {
//       this.matchService.updateMatch(this.matchData.id, this.matchData).subscribe(() => {
//         this.closeDialog();
//         this.loadMatches();
//       });
//     } else {
//       this.matchService.createMatch(this.matchData).subscribe(() => {
//         this.closeDialog();
//         this.loadMatches();
//       });
//     }
//   }

//   deleteMatch(id: number) {
//     this.matchService.deleteMatch(id).subscribe(() => {
//       this.loadMatches();
//     });
//   }

//   searchMatches() {
//     if (this.searchQuery) {
//       this.filteredMatches = this.matches.filter(
//         (match) =>
//           match.team1.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//           match.team2.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
//           match.match_id.toString().includes(this.searchQuery)
//       );
//     } else {
//       this.filteredMatches = this.matches;
//     }
//   }

//   private getEmptyMatch(): Match {
//     return {
//       id: 0,
//       match_id: null,
//       team1: '',
//       team2: '',
//       match_date: '',
//       match_time: ''
//     };
//   }
//   private generateMatchId(): string {
//     // Find the highest existing match ID in the format "MXXXX"
//     const maxId = this.matches
//       .map((match) => parseInt(match.match_id.slice(1), 10)) // Extract numeric part
//       .filter((num) => !isNaN(num)) // Filter out invalid numbers
//       .reduce((max, current) => Math.max(max, current), 0);

//     const nextId = maxId + 1;
//     return `M${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Match } from '../model/matches.model';
import { MatchService } from '../service/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];
  filteredMatches: Match[] = [];
  searchQuery: string = '';
  showDialog: boolean = false;
  isUpdateMode: boolean = false;
  matchData: Match = this.getEmptyMatch();
  submitted = false;

  constructor(private matchService: MatchService) {}

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.getMatches().subscribe((data) => {
      this.matches = data;
      this.filteredMatches = data;
    });
  }

  openDialog(match?: Match) {
    this.submitted = false;
    if (match) {
      this.isUpdateMode = true;
      this.matchData = { ...match };
    } else {
      this.isUpdateMode = false;
      this.matchData = this.getEmptyMatch();
      this.matchData.match_id = this.generateMatchId(); // Generate match_id here
    }
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveOrUpdateMatch() {
    if (this.isUpdateMode) {
      this.matchService.updateMatch(this.matchData.id, this.matchData).subscribe(() => {
        this.closeDialog();
        this.loadMatches();
      });
    } else {
      this.matchService.createMatch(this.matchData).subscribe(() => {
        this.closeDialog();
        this.loadMatches();
      });
    }
  }

  deleteMatch(id: number) {
    this.matchService.deleteMatch(id).subscribe(() => {
      this.loadMatches();
    });
  }

  searchMatches() {
    if (this.searchQuery) {
      this.filteredMatches = this.matches.filter(
        (match) =>
          match.team1.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          match.team2.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          match.match_id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredMatches = this.matches;
    }
  }

  private getEmptyMatch(): Match {
    return {
      id: 0,
      match_id: '',
      team1: '',
      team2: '',
      match_date: '',
      match_time: ''
    };
  }

  private generateMatchId(): string {
    // Find the highest existing match ID in the format "MXXXX"
    const maxId = this.matches
      .map((match) => parseInt(match.match_id.slice(1), 10)) // Extract numeric part
      .filter((num) => !isNaN(num)) // Filter out invalid numbers
      .reduce((max, current) => Math.max(max, current), 0);

    const nextId = maxId + 1;
    return `M${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
  }
}
