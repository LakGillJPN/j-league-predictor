import { Fixture } from "../../globals";
import axios from "axios";
import { fixtureAPICall } from "./api-calls.ts"

export const getGameweekNum = (gameweek : string | string[]) => {
  if (isNaN(parseInt(gameweek[gameweek.length-2]))) {
    return gameweek[gameweek.length-1]
  }
  else {
    return gameweek[gameweek.length-2] + gameweek[gameweek.length-1]
  }
};

export const getNextGameweek = (gameweek: string) => {
  const currentNumber = parseInt(gameweek.split('-')[1].trim());
  const nextNumber = currentNumber + 1;
  return `Regular Season - ${nextNumber}`
};

export const getCurrentGameweek = (gameweek: string) => {
  const currentNumber = parseInt(gameweek.split('-')[1].trim());
  return `Regular Season - ${currentNumber}`
};

export const getLastGameweek = (gameweek: string) => {
  const currentNumber = parseInt(gameweek.split('-')[1].trim());
  const nextNumber = currentNumber - 1;
  return `Regular Season - ${nextNumber}`
};



export async function getGameweek(){
  function addHours(date : Date, hours : number) {
    date.setHours(date.getHours() + hours)
    return date;
  }

  // const fetchedFixs = await axios.get(fixtureAPICall());
  // const date = addHours(new Date(),2)
  // const weekData = fetchedFixs.data.filter((data: Fixture)  => new Date(data.date) > date)
  // const gameString = weekData[0].gameweek
  // const nextWeek = getNextGameweek(gameString)
  // const weeksGames = fetchedFixs.data.filter((data: Fixture) => data.gameweek === gameString)
  // console.log(gameString)
  // const areAllFinishedNS = weeksGames.every((game : Fixture) => game.isFinished === 'NS' || game.isFinished === 'TBD');
  
  // return areAllFinishedNS === true ? gameString : nextWeek;

  return `Regular Season - 1`  // FOR TESTING PURPOSES
}

export async function playGameweek(setter: (arg0: any) => void) {
  const result = await getGameweek()
  setter(result)
}

//export {getGameweekNum, getGameweek, playGameweek, getLastGameweek }