// import { Component, OnInit } from '@angular/core';
// import { Ticket } from '../model/ticket.model';
// import { TicketService } from '../service/ticket.service';

// @Component({
//   selector: 'app-tickets',
//   templateUrl: './tickets.component.html',
//   styleUrls: ['./tickets.component.css']
// })
// export class TicketsComponent implements OnInit {
//   tickets: Ticket[] = [];
//   filteredTickets: Ticket[] = [];
//   searchQuery: string = '';
//   showDialog: boolean = false;
//   isUpdateMode: boolean = false;
//   ticketData: Ticket = this.getEmptyTicket();
//   submitted = false;

//   constructor(private ticketService: TicketService) {}

//   ngOnInit(): void {
//     this.loadTickets();
//   }

//   loadTickets() {
//     this.ticketService.getTickets().subscribe((data) => {
//       this.tickets = data;
//       this.filteredTickets = data;
//     });
//   }

//   openDialog(ticket?: Ticket) {
//     this.submitted = false;
//     if (ticket) {
//       this.isUpdateMode = true;
//       this.ticketData = { ...ticket };
//     } else {
//       this.isUpdateMode = false;
//       this.ticketData = this.getEmptyTicket();
//     }
//     this.showDialog = true;
//   }

//   closeDialog() {
//     this.showDialog = false;
//   }

//   saveOrUpdateTicket() {
//     if (this.isUpdateMode) {
//       this.ticketService
//         .updateTicket(this.ticketData.id, this.ticketData)
//         .subscribe(() => {
//           this.closeDialog();
//           this.loadTickets();
//         });
//     } else {
//       this.ticketService.createTicket(this.ticketData).subscribe(() => {
//         this.closeDialog();
//         this.loadTickets();
//       });
//     }
//   }

//   deleteTicket(id: number) {
//     this.ticketService.deleteTicket(id).subscribe(() => {
//       this.loadTickets();
//     });
//   }

//   searchTickets() {
//     if (this.searchQuery) {
//       this.filteredTickets = this.tickets.filter(
//         (ticket) =>
//           ticket.buyer_name
//             .toLowerCase()
//             .includes(this.searchQuery.toLowerCase()) ||
//           ticket.ticket_id.toString().includes(this.searchQuery)
//       );
//     } else {
//       this.filteredTickets = this.tickets;
//     }
//   }

//   private getEmptyTicket(): Ticket {
//     return {
//       id: 0,
//       ticket_id: null,
//       buyer_name: '',
//       seat_number: '',
//       ticket_price: null,
//       purchase_date: ''
//     };
//   }
// }


import { Component, OnInit } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[] = [];
  filteredTickets: Ticket[] = [];
  searchQuery: string = '';
  showDialog: boolean = false;
  isUpdateMode: boolean = false;
  ticketData: Ticket = this.getEmptyTicket();
  submitted = false;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets() {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
      this.filteredTickets = data;
    });
  }

  openDialog(ticket?: Ticket) {
    this.submitted = false;
    if (ticket) {
      this.isUpdateMode = true;
      this.ticketData = { ...ticket };
    } else {
      this.isUpdateMode = false;
      this.ticketData = this.getEmptyTicket();
      this.ticketData.ticket_id = this.generateTicketId(); // Generate ticket_id here
    }
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
  }

  saveOrUpdateTicket() {
    if (this.isUpdateMode) {
      this.ticketService
        .updateTicket(this.ticketData.id, this.ticketData)
        .subscribe(() => {
          this.closeDialog();
          this.loadTickets();
        });
    } else {
      this.ticketService.createTicket(this.ticketData).subscribe(() => {
        this.closeDialog();
        this.loadTickets();
      });
    }
  }

  deleteTicket(id: number) {
    this.ticketService.deleteTicket(id).subscribe(() => {
      this.loadTickets();
    });
  }

  searchTickets() {
    if (this.searchQuery) {
      this.filteredTickets = this.tickets.filter(
        (ticket) =>
          ticket.buyer_name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          ticket.ticket_id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredTickets = this.tickets;
    }
  }

  private getEmptyTicket(): Ticket {
    return {
      id: 0,
      ticket_id: '',
      buyer_name: '',
      seat_number: '',
      ticket_price: null,
      purchase_date: ''
    };
  }

  private generateTicketId(): string {
    // Find the highest existing ticket ID in the format "TXXXX"
    const maxId = this.tickets
      .map((ticket) => parseInt(ticket.ticket_id.slice(1), 10)) // Extract numeric part
      .filter((num) => !isNaN(num)) // Filter out invalid numbers
      .reduce((max, current) => Math.max(max, current), 0);

    const nextId = maxId + 1;
    return `T${nextId.toString().padStart(4, '0')}`; // Ensure 4-digit number
  }
}
