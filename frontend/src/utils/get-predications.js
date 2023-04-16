import axios from 'axios';

async function getPredications(setter, email) {
  try {
    const fetchedPredications = await axios.get('/api/predications');
   // setter(fetchedPredications.data.filter(data => data.username === email))
    setter(fetchedPredications.data.filter(x => x.username === email))
  }
  catch(err) {
    console.log(err)
  }
};

export default getPredications;