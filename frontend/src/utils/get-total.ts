import axios from "axios";
import { getGameweek, getLastGameweek } from "./get-gameweek.ts";
import { Predication } from "../../../globals";

async function getTotal(setter: (arg0: any) => void, uid: string) {
  try {
    const fetchedData = await axios.get('https://j-league-backend.vercel.app/api/total');
    const gameweek = await getGameweek()
    const lastweek = await getLastGameweek(gameweek)
    setter(fetchedData.data.filter(
      (data: Predication) => 
      //data.gameweek === 'Regular Season - 18' &&  - FOR TESTING PURPOSES
      data.gameweek === lastweek && 
      data.uid === uid 
    )
    .map((data: Predication) => data.game_points)
    .reduce((prev: number, curr: number) => prev + curr, 0));
  }
  catch (err) {
    console.log(err);
  }
}

export default getTotal