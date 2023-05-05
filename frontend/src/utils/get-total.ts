import axios from "axios";
import { getGameweek, getLastGameweek } from "./get-gameweek.ts";
import { Predication } from "../../../globals";

async function getTotal(setter: (arg0: any) => void, email: string) {
  try {
    const fetchedData = await axios.get('api/total');
    const gameweek = await getGameweek()
    const lastweek = await getLastGameweek(gameweek)
    setter(fetchedData.data.filter(
      (data: Predication) => 
      data.gameweek === lastweek && 
      data.username === email 
    )
    .map((data: Predication) => data.game_points)
    .reduce((prev: number, curr: number) => prev + curr, 0));
  }
  catch (err) {
    console.log(err);
  }
}

export default getTotal