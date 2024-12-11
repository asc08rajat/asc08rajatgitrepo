import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Match } from "../model/matches.model";

@Injectable({
  providedIn: "root",
})
export class MatchService {
  baseUrl: string = "http://localhost:8080/api/v2/matches"; // Update the endpoint for tournaments

  constructor(private httpClient: HttpClient) {}

  // Fetch all tournaments
  getMatches() {
    return this.httpClient.get<Match[]>(this.baseUrl);
  }

  // Fetch a tournament by its ID
  getMatchById(id: number) {
    return this.httpClient.get<Match>(`${this.baseUrl}/${id}`);
  }

  // Add a new tournament
  createMatch(match: Match) {
    return this.httpClient.post(this.baseUrl, match);
  }

  // Update a tournament by ID
  updateMatch(id: number, match: Match) {
    return this.httpClient.put(`${this.baseUrl}/${id}`, match);
  }

  // Delete a tournament by ID
  deleteMatch(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
