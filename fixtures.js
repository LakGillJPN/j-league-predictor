const axios = require('axios') //league 98

const options = {
  method: 'GET',
  //TO GET THE EVENTS OF FINISHED GAMES
 // url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures/events',
  //params: {fixture: '994647'},
  //  params: {league: '98', season: '2023', from: '2023-04-08', to: '2023-04-10'},

  url: 'https://api-football-v1.p.rapidapi.com/v3/fixtures',
  params: {league: '98', season: '2023'},
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

async function getFixturesData() {
  let fixturesData = [];
 
  try {
    const response = await axios.request(options);
    const data = response.data.response;
    data.map(game => fixturesData.push([
      game.fixture.id, 
      game.league.round, 
      game.teams.home.name,
      game.teams.away.name, 
      game.fixture.date, 
      game.fixture.status.short, 
      game.teams.home.logo, 
      game.teams.away.logo,
      game.teams.home.winner,
      game.teams.away.winner,
      game.score.fulltime.home,
      game.score.fulltime.away
     ]))
  } catch (error) {
    console.error(error);
  }
  return fixturesData;
}



module.exports = { getFixturesData }