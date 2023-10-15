import axios from 'axios';
import { getGameweek, getLastGameweek } from './get-gameweek.ts';
import { Predication } from '../../globals';
import { predicationsAPICall } from './api-calls.ts';

async function getPredications(setter: (arg0: any) => void, uid: string) {
  try {
    const fetchedPredications = await axios.get(predicationsAPICall());
    const gameweek = await getGameweek()
    setter(fetchedPredications.data.filter((data : Predication) => data.uid === uid && data.gameweek === getLastGameweek(gameweek)))
  }
  catch(err) {
    console.log(err)
  }
};

async function getPredicationsNow(setter: (arg0: any) => void, uid: string) {
  try {
    const fetchedPredications = await axios.get(predicationsAPICall());
    const gameweek = await getGameweek()
    setter(fetchedPredications.data.filter((data : Predication) => data.uid === uid && data.gameweek === gameweek))
  }
  catch(err) {
    console.log(err)
  }
};



export default getPredications;