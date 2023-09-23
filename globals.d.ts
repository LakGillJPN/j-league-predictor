export interface Fixture {
  fixture_id: number;
  gameweek: string;
  home_team_name: string; 
  away_team_name: string;
  date: string;
  status: {
    short: string;
  };
  isFinished: string;
  home_team_logo_url: string;
  away_team_logo_url: string;
  did_home_team_win: boolean;
  did_away_team_win: boolean;
  home_team_score: number;
  away_team_score: number;
  venue_name: string;
  venue_city: string; 
  venue: {
    name: string;
    city: string;
  }
}

export interface Predication {
  uid: string;
  gameweek: string;
  current_gameweek: string;
  game_points: number;
}

export interface Process {
  env: {
    development: any;
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
    home_win: boolean;
    away_win: boolean;
    home_team_score: number;
    away_team_score: number;
    did_home_team_win: boolean;
    did_away_team_win: boolean;
 }

 export type scoreGen  = (
  predicatedHomeScore: number,
  predicatedAwayScore: number,
  predicatedHomeWin: boolean,
  predicatedAwayWin: boolean,
  actualHomeScore: number,
  actualAwayScore: number,
  actualHomeWin: boolean,
  actualAwayWin: boolean,
 ) => number;
 