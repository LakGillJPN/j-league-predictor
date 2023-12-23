import axios from "axios";
import { Fixture, Predication } from "../../globals";
import { resultsAPICall, fixtureAPICall } from "./api-calls.ts";

async function getResults (setter: (arg0: any) => void, uid: string) {
  try {
    const fetchedResults = await axios.get(resultsAPICall());
    const fetchedFixs = await axios.get(fixtureAPICall());
    const resultsWeek = fetchedFixs.data.filter((data: Fixture) => data.isFinished === 'FT')
    setter(fetchedResults.data.filter((data: Predication) => 
      data.gameweek === 'Regular Season - 1' 
      //data.gameweek === resultsWeek[resultsWeek.length-1].gameweek 
      && data.uid === uid
    ));
  }
 catch(err) {
    console.log(err);
  }
}

export default getResults;