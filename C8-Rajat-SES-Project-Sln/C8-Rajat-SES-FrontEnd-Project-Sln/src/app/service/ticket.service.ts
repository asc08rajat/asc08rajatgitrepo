import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Ticket } from "../model/ticket.model";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  baseUrl: string = "http://localhost:8080/api/v5/tickets"; // Update the endpoint for tournaments

  constructor(private httpClient: HttpClient) {}

  // Fetch all tournaments
  getTickets() {
    return this.httpClient.get<Ticket[]>(this.baseUrl);
  }

  // Fetch a tournament by its ID
  getTicketById(id: number) {
    return this.httpClient.get<Ticket>(`${this.baseUrl}/${id}`);
  }

  // Add a new tournament
  createTicket(ticket: Ticket) {
    return this.httpClient.post(this.baseUrl, ticket);
  }

  // Update a tournament by ID
  updateTicket(id: number, ticket: Ticket) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, ticket);
  }

  // Delete a tournament by ID
  deleteTicket(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
