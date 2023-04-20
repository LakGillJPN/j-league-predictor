import axios from "axios";

const getGameweekNum = (gameweek) => {
  if (isNaN(parseInt(gameweek[gameweek.length-2]))) {
    return gameweek[gameweek.length-1]
  }
  else {
    return gameweek[gameweek.length-2] + gameweek[gameweek.length-1]
  }
};



export default getGameweekNum;