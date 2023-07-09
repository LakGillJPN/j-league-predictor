export interface Fixture {
  id: number;
  date: string;
  status: {
    short: string;
  };
  gameweek: string;
  home_team_logo: string;
  away_team_logo: string;
  home_team: string; 
  away_team: string;
  isFinished: string;
  venue_name: string;
  venue_city: string; 
  
  venue: {
    name: string;
    city: string;
  }
}

export interface Predication {
  username: string;
  gameweek: string;
  game_points: number;
}

export interface Process {
  env: {
    NODE_ENV: string
  }
}

export interface Team {
  name: string;
  logo: string;
  winner: boolean;
}

export interface Game {
  fixture: Fixture;
  league: {
    round: number;
  };
  teams: {
    home: Team;
    away: Team;
  };
  score: {
    fulltime: {
      home: number;
      away: number;
    };
  };
}

export interface Points { 
  gamePoints: Number;
  gameId: Number;
  gameweek: String;
 }

 export interface Result {
    id: number;
    gameweek: string;
    home_team: string;
    away_team: string
    home_predication: number;
    away_predication: number;
    home_winner_predication: boolean;
    away_winner_predication: boolean;
    home_score: number;
    away_score: number;
    home_winner: boolean;
    away_winner: boolean;
 }
 