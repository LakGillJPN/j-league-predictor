import { Dispatch, SetStateAction } from 'react';
import { Fixture } from '../../globals';

export const handleAwayPlusChange = (
  index: number,
  fixtures: Fixture[],
  awayPredications: { [key: string]: number },
  fixtureOrder: string[],
  setFixtureOrder: Dispatch<SetStateAction<string[]>>,
  setAwayPredications: Dispatch<SetStateAction<{ [key: string]: number }>>
) => {
  const fixtureId: number = fixtures[index].fixture_id;

  // Create a new object with existing homePredications
  const updatedAwayPredications = { ...awayPredications };

  // If the fixtureId exists, increment the value, otherwise set it to 0
  updatedAwayPredications[fixtureId] = (updatedAwayPredications[fixtureId] || 0) + 1;

  // Update the fixture order if the fixtureId is not in the array
  if (!fixtureOrder.includes(String(fixtureId))) {
    setFixtureOrder((prevFixtureOrder: string[]) => [...prevFixtureOrder, String(fixtureId)]);
  }

  // Update both states
  setAwayPredications(updatedAwayPredications);
};

export const handleAwayMinusChange = (
  index: number,
  fixtures: Fixture[],
  awayPredications: { [key: string]: number },
  fixtureOrder: string[],
  setFixtureOrder: Dispatch<SetStateAction<string[]>>,
  setHomePredications: Dispatch<SetStateAction<{ [key: string]: number }>>
) => {
  const fixtureId = fixtures[index].fixture_id;

  // Create a new object with existing homePredications
  const updatedAwayPredications = { ...awayPredications };

  // If the fixtureId exists, increment the value, otherwise set it to 1
  updatedAwayPredications[fixtureId] = Math.max(0, (updatedAwayPredications[fixtureId] || 0) - 1);

  // Update the fixture order if the fixtureId is not in the array
  if (!fixtureOrder.includes(String(fixtureId))) {
    setFixtureOrder((prevFixtureOrder: string[]) => [...prevFixtureOrder, String(fixtureId)]);
  }
  // Update both states
  setHomePredications(updatedAwayPredications);
};
