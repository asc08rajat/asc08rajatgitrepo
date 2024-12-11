// import { Component, OnInit } from '@angular/core';
// import { Player } from '../model/player.model';
// import { PlayerService } from '../service/player.service';

// @Component({
//   selector: 'app-players',
//   templateUrl: './players.component.html',
//   styleUrls: ['./players.component.css']
// })
// export class PlayersComponent implements OnInit {
//   players: Player[] = [];
//   filteredPlayers: Player[] = [];
//   searchQuery: string = '';
//   showDialog: boolean = false;
//   isUpdateMode: boolean = false;
//   playerData: Player = this.getEmptyPlayer();
//   submitted=false;

//   constructor(private playerService: PlayerService) {}

//   ngOnInit(): void {
//     this.loadPlayers();
//   }

//   loadPlayers() {
//     this.playerService.getPlayer().subscribe((data) => {
//       this.players = data;
//       this.filteredPlayers = data;
//     });
//   }

//   openDialog(player?: Player) {
//     this.submitted=false;
//     if (player) {
//       this.isUpdateMode = true;
//       this.playerData = { ...player };
//     } else {
//       this.isUpdateMode = false;
//       this.playerData = this.getEmptyPlayer();
//     }
//     this.showDialog = true;
//   }

//   closeDialog() {
//     this.showDialog = false;
//   }

//   saveOrUpdatePlayer() {
//     if (this.isUpdateMode) {
//       this.playerService
//         .updatePlayer(this.playerData.id, this.playerData)
//         .subscribe(() => {
//           this.closeDialog();
//           this.loadPlayers();
//         });
//     } else {
//       this.playerService.createPlayer(this.playerData).subscribe(() => {
//         this.closeDialog();
//         this.loadPlayers();
//       });
//     }
//   }

//   deletePlayer(id: number) {
    
//       this.playerService.deletePlayer(id).subscribe(() => {
//         this.loadPlayers();
//       });
    
//   }

//   searchPlayers() {
//     if (this.searchQuery) {
//       this.filteredPlayers = this.players.filter(
//         (player) =>
//           player.player_name
//             .toLowerCase()
//             .includes(this.searchQuery.toLowerCase()) ||
//           player.player_id.toString().includes(this.searchQuery)
//       );
//     } else {
//       this.filteredPlayers = this.players;
//     }
//   }

//   private getEmptyPlayer(): Player {
//     return {
//       id: 0,
//       player_id: null,
//       player_name: '',
//       player_age: null,
//       player_role: '',
//       player_nationality: ''
//     };
//   }
  
// }

import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player.model';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[] = [];
  filteredPlayers: Player[] = [];
  searchQuery: string = '';
  showDialog: boolean = false;
  isUpdateMode: boolean = false;
  playerData: Player = this.getEmptyPlayer();
  submitted = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getPlayer().subscribe((data) => {
      this.players = data;
      this.filteredPlayers = data;
    });
  }

  openDialog(player?: Player) {
    this.submitted = false;
    if (player) {
      this.isUpdateMode = true;
      this.playerData = { ...player };
    } else {
      this.isUpdateMode = false;
      this.playerData = this.getEmptyPlayer();
      this.playerData.player_id = this.generatePlayerId(); // Generate player_id here
    }
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveOrUpdatePlayer() {
    if (this.isUpdateMode) {
      this.playerService.updatePlayer(this.playerData.id, this.playerData).subscribe(() => {
        this.closeDialog();
        this.loadPlayers();
      });
    } else {
      this.playerService.createPlayer(this.playerData).subscribe(() => {
        this.closeDialog();
        this.loadPlayers();
      });
    }
  }

  deletePlayer(id: number) {
    this.playerService.deletePlayer(id).subscribe(() => {
      this.loadPlayers();
    });
  }

  searchPlayers() {
    if (this.searchQuery) {
      this.filteredPlayers = this.players.filter(
        (player) =>
          player.player_name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          player.player_id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredPlayers = this.players;
    }
  }

  private getEmptyPlayer(): Player {
    return {
      id: 0,
      player_id: '',
      player_name: '',
      player_age: null,
      player_role: '',
      player_nationality: ''
    };
  }

  private generatePlayerId(): string {
    // Find the highest existing player ID in the format "PXXXX"
    const maxId = this.players
      .map((player) => parseInt(player.player_id.slice(1), 10)) // Extract numeric part
      .filter((num) => !isNaN(num)) // Filter out invalid numbers
      .reduce((max, current) => Math.max(max, current), 0);

    const nextId = maxId + 1;
    return `P${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
  }
}
