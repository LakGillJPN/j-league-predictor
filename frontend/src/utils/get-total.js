import axios from "axios";
import { getGameweek, getLastGameweek } from "./get-gameweek.ts";

async function getTotal(setter,email) {
  try {
    const fetchedData = await axios.get('api/total');
    const gameweek = await getGameweek()
    const lastweek = await getLastGameweek(gameweek)
    setter(fetchedData.data.filter(
      x => 
      x.gameweek === lastweek && 
      x.username === email 
    )
    .map(x => x.game_points)
    .reduce((prev, curr) => prev + curr, 0));
  }
  catch (err) {
    console.log(err);
  }
}

export default getTotal