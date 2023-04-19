/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const { getFixturesData } = require('../../fixtures');

exports.seed = async function(knex) {
  // Deletes ALL existing entries


  const fixturesData = await getFixturesData();
  await knex('fixtures').del()

  for (const data of fixturesData) {
    await knex('fixtures').insert({
      id: data[0],
      gameweek: data[1],
      home_team: data[2],
      away_team: data[3],
      date: data[4],
      isFinished: data[5],
      home_team_logo: data[6],
      away_team_logo: data[7],
      home_winner: data[8],
      away_winner: data[9],
      home_score: data[10],
      away_score: data[11],
    });
  }
};

