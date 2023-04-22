import axios from 'axios';
import { getGameweek } from './get-gameweek';

async function getPredications(setter, email) {
  try {
    const fetchedPredications = await axios.get('/api/predications');
    const gameweek = await getGameweek()
    setter(fetchedPredications.data.filter(x => x.username === email && x.gameweek === gameweek))
  }
  catch(err) {
    console.log(err)
  }
};

export default getPredications;