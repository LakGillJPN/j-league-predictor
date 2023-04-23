import axios from 'axios';
import { getGameweek } from './get-gameweek';


async function getFixtures(setter) {
  const fetchedFixs = await axios.get('/api/fixtures');
  const gameweek = await getGameweek()
  const weekData = fetchedFixs.data.filter(x => x.isFinished === 'NS')
  // setting it to Regular Season - 9 for testing
  //setter(fetchedFixs.data.filter(x => x.gameweek === 'Regular Season - 9'))
 setter(fetchedFixs.data.filter(x => x.gameweek === gameweek))
}

export default getFixtures