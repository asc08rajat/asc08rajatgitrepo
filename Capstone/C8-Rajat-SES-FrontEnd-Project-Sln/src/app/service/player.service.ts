import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../model/player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseUrl: string = 'http://localhost:8080/api/v1/players';

  constructor(private httpClient: HttpClient) {}

  getPlayer(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(this.baseUrl);
  }

  getPlayerById(id: number): Observable<Player> {
    return this.httpClient.get<Player>(`${this.baseUrl}/${id}`);
  }

  createPlayer(player: Player): Observable<void> {
    return this.httpClient.post<void>(this.baseUrl, player);
  }

  updatePlayer(id: number, player: Player): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${id}`, player);
  }

  deletePlayer(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
