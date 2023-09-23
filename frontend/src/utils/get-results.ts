import axios from "axios";
import { Fixture, Predication } from "../../../globals";

async function getResults (setter: (arg0: any) => void, uid: string) {
  try {
    const fetchedResults = await axios.get('api/results');
    const fetchedFixs = await axios.get('api/fixtures')
    const resultsWeek = fetchedFixs.data.filter((data: Fixture) => data.isFinished === 'FT')
    setter(fetchedResults.data.filter((data: Predication) => 
      data.gameweek === resultsWeek[resultsWeek.length-1].gameweek && 
      data.uid === uid
    ));
  }
 catch(err) {
    console.log(err);
  }
}

export default getResults;