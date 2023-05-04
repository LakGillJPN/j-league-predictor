export interface Fixture {
  id: number;
  date: string;
  status: {
    short: string;
  };
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
 