import axios from "axios";

async function getResults (setter, email) {
  try {
    const fetchedResults = await axios.get('api/results');
    const fetchedFixs = await axios.get('api/fixtures')
    const resultsWeek = fetchedFixs.data.filter(x => x.isFinished === 'FT')
    console.log(resultsWeek[resultsWeek.length-1])
    setter(fetchedResults.data.filter(
      x => 
      x.gameweek === resultsWeek[resultsWeek.length-1].gameweek && 
      x.username === email
    ));
  }
 catch(err) {
    console.log(err);
  }
}

export default getResults;