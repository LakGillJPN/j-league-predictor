import axios from 'axios';
import { getGameweek } from './get-gameweek.ts';
import { Fixture } from '../../globals';
import { SetStateAction } from 'react';
import { fixtureAPICall } from './api-calls.ts';

async function getFixtures(setter: { (value: SetStateAction<never[]>): void; (arg0: any): void; }) {
  const fetchedFixs = await axios.get(fixtureAPICall());
  const gameweek = await getGameweek()

  const sortedWeekData = fetchedFixs.data
    .filter((data: Fixture) => data.gameweek === gameweek)
    .sort((a: Fixture, b: Fixture) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
  setter(sortedWeekData)
}

export default getFixtures