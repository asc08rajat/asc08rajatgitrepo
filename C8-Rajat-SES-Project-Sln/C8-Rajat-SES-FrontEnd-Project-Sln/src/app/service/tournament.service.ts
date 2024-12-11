import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Tournament } from "../model/tournament.model"; // Import the Tournament model

@Injectable({
  providedIn: "root",
})
export class TournamentService {
  baseUrl: string = "http://localhost:8080/api/v3/tournaments"; // Update the endpoint for tournaments

  constructor(private httpClient: HttpClient) {}

  // Fetch all tournaments
  getTournaments() {
    return this.httpClient.get<Tournament[]>(this.baseUrl);
  }

  // Fetch a tournament by its ID
  getTournamentById(id: number) {
    return this.httpClient.get<Tournament>(`${this.baseUrl}/${id}`);
  }

  // Add a new tournament
  createTournament(tournament: Tournament) {
    return this.httpClient.post(this.baseUrl, tournament);
  }

  // Update a tournament by ID
  updateTournament(id: number, tournament: Tournament) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, tournament);
  }

  // Delete a tournament by ID
  deleteTournament(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
