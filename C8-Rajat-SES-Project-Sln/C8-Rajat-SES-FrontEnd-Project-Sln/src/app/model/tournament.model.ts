export class Tournament {
    id: number;
    tournament_id: string;
    tournament_name: string;
    start_date: Date | string; // Accept both Date and string
    end_date: Date | string;   // Accept both Date and string
    location: string;
  }