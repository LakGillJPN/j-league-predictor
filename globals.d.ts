export interface Fixture {
  id: number;
  date: string;
  status: {
    short: string;
  };
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

