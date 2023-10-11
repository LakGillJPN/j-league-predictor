import { Dispatch, SetStateAction } from 'react';
import { Fixture } from '../../globals';

export const handleHomePlusChange = (
  index: number,
  fixtures: Fixture[],
  homePredications: { [key: string]: number },
  fixtureOrder: string[],
  setFixtureOrder: Dispatch<SetStateAction<string[]>>,
  setHomePredications: Dispatch<SetStateAction<{ [key: string]: number }>>
) => {
  const fixtureId: number = fixtures[index].fixture_id;

  // Create a new object with existing homePredications
  const updatedHomePredications = { ...homePredications };

  // If the fixtureId exists, increment the value, otherwise set it to 0
  updatedHomePredications[fixtureId] = (updatedHomePredications[fixtureId] || 0) + 1;

  // Update the fixture order if the fixtureId is not in the array
  if (!fixtureOrder.includes(String(fixtureId))) {
    setFixtureOrder((prevFixtureOrder: string[]) => [...prevFixtureOrder, String(fixtureId)]);
  }

  // Update both states
  setHomePredications(updatedHomePredications);
};

export const handleHomeMinusChange = (
  index: number,
  fixtures: Fixture[],
  homePredications: { [key: string]: number },
  fixtureOrder: string[],
  setFixtureOrder: Dispatch<SetStateAction<string[]>>,
  setHomePredications: Dispatch<SetStateAction<{ [key: string]: number }>>
) => {
  const fixtureId = fixtures[index].fixture_id;

  // Create a new object with existing homePredications
  const updatedHomePredications = { ...homePredications };

  // If the fixtureId exists, increment the value, otherwise set it to 1
  updatedHomePredications[fixtureId] = Math.max(0, (updatedHomePredications[fixtureId] || 0) - 1);

  // Update the fixture order if the fixtureId is not in the array
  if (!fixtureOrder.includes(String(fixtureId))) {
    setFixtureOrder((prevFixtureOrder: string[]) => [...prevFixtureOrder, String(fixtureId)]);
  }
  // Update both states
  setHomePredications(updatedHomePredications);
};
