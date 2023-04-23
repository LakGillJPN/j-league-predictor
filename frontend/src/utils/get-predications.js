import axios from 'axios';
import { getGameweek, getLastGameweek } from './get-gameweek';

async function getPredications(setter, email) {
  try {
    const fetchedPredications = await axios.get('/api/predications');
    const gameweek = await getGameweek()
    setter(fetchedPredications.data.filter(x => x.username === email && x.gameweek === getLastGameweek(gameweek)))
  }
  catch(err) {
    console.log(err)
  }
};

export default getPredications;