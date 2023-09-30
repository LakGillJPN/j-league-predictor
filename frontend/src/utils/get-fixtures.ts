import axios from 'axios';
import { getGameweek } from './get-gameweek.ts';
import { Fixture } from '../../globals';
import { SetStateAction } from 'react';

let fixString : string;
const apiUrl = process.env.WEBSITE_URL || 'https://j-league-backend.vercel.app/api/fixtures';

if (process.env.NODE_ENV === 'development') {
  fixString = '/api/fixtures' 
} else {
  fixString = apiUrl
}


async function getFixtures(setter: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {
  const fetchedFixs = await axios.get( fixString);
  console.log(fixString)
  const gameweek = await getGameweek()
  //const weekData = fetchedFixs.data.filter((data : Fixture) => data.isFinished === 'NS')
  //console.log(weekData.filter((data : Fixture) => data.gameweek === gameweek))
  setter(fetchedFixs.data.filter((data : Fixture) => data.gameweek === gameweek))
}

export default getFixtures