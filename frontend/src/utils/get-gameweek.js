
import axios from "axios";

const getGameweekNum = (gameweek) => {
  if (isNaN(parseInt(gameweek[gameweek.length-2]))) {
    return gameweek[gameweek.length-1]
  }
  else {
    return gameweek[gameweek.length-2] + gameweek[gameweek.length-1]
  }
};

const getNextGameweek = (gameweek) => {
  const currentNumber = parseInt(gameweek.split('-')[1].trim());
  const nextNumber = currentNumber + 1;
  return `Regular Season - ${nextNumber}`
};

async function getGameweek(){
  function addHours(date, hours) {
    date.setHours(date.getHours() + hours)
    return date;
  }
  const fetchedFixs = await axios.get('/api/fixtures');
  const date = addHours(new Date(),2)
  const weekData = fetchedFixs.data.filter(x => new Date(x.date) > date)
  const gameString = weekData[0].gameweek
  const nextWeek = getNextGameweek(gameString)
  const weeksGames = fetchedFixs.data.filter(x => x.gameweek === gameString);
  const areAllFinishedNS = weeksGames.every(x => x.isFinished === 'NS');
  return areAllFinishedNS === true ? gameString : nextWeek
}

async function playGameweek(setter) {
  const result = await getGameweek()
  setter(result)
}

export {getGameweekNum, getGameweek, playGameweek }