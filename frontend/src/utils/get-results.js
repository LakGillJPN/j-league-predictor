import axios from "axios";

async function getResults (setter, email) {
  try {
    const fetchedResults = await axios.get('api/results');
    setter(fetchedResults.data.filter(
      x => 
      x.gameweek === `Regular Season - 8` && 
      x.username === email
    ));
  }
 catch(err) {
    console.log(err);
  }
}

export default getResults;