export class Match {
  id: number;                // Unique identifier for the match
  match_id: string;          // Match-specific ID
  team1: string;             // Name of Team 1
  team2: string;             // Name of Team 2
  match_date: Date | string; // Date of the match (Date or string)
  match_time: string;        // Time of the match
           
}