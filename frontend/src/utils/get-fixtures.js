import axios from 'axios';

async function getFixtures(setter) {
  const fetchedFixs = await axios.get('/api/fixtures');
  const weekData = fetchedFixs.data.filter(x => x.isFinished === 'NS')
  setter(fetchedFixs.data.filter(x => x.gameweek === weekData[0].gameweek))
}

export default getFixtures