import axios from 'axios';

async function getFixtures(setter) {
  const fetchedFixs = await axios.get('/fixtures');
  setter(fetchedFixs.data.filter(x => x.gameweek === 'Regular Season - 8'))
}

export default getFixtures