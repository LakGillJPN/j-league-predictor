import axios from 'axios';
import { getGameweek } from './get-gameweek.ts';
import { Fixture } from '../../globals';
import { SetStateAction } from 'react';

let fixString : string;

if (process.env.NODE_ENV === 'development') {
  fixString = '/api/fixtures' 
} else {
  fixString = `${process.env.WEBSITE_URL}/api/fixtures`
}


async function getFixtures(setter: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {
  const fetchedFixs = await axios.get( fixString);
  const gameweek = await getGameweek()
  //const weekData = fetchedFixs.data.filter((data : Fixture) => data.isFinished === 'NS')
  //console.log(weekData.filter((data : Fixture) => data.gameweek === gameweek))
  setter(fetchedFixs.data.filter((data : Fixture) => data.gameweek === gameweek))
}

export default getFixtures