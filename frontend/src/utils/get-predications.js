import axios from 'axios';

async function getPredications(setter, email) {
  try {
    const fetchedPredications = await axios.get('/api/predications');
   // setter(fetchedPredications.data.filter(data => data.username === email))
    setter(fetchedPredications.data.filter(x => x.username === email ))

    // gameweek needs to be it's own function in auth
    // add gameweek to predications table
    // add gameweek to the predications server push
  }
  catch(err) {
    console.log(err)
  }
};

export default getPredications;