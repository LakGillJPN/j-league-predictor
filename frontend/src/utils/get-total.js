import axios from "axios";

async function getTotal(setter,email) {
  try {
    const fetchedData = await axios.get('api/total');
    setter(fetchedData.data.filter(
      x => 
      x.gameweek === 'Regular Season - 8' && 
      x.username === email 
    )
    .map(x => x.game_points)
    .reduce((prev, curr) => prev + curr, 0));
  }
  catch (err) {
    console.log(err);
  }
}

export default getTotal