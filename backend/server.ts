//const express = require('express');
//const db = require('./knex')
//const path = require('path');
import express, { Express, Request, Response } from 'express';
import db from './knex';
import path from 'path';
import { Points } from '../globals';


export function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.use(express.json());

  app.get('/hello', (req : Request, res: Response) => {
    res.send('world');
  });

  // Retrive the fixtures data from the database
  app.get('/api/fixtures', async (req, res) => {
    const fixtures = await db('fixtures')
      .select('*')
      .timeout(1500)
    res.send(fixtures);
  });

  app.get('/api/users', async (req, res) => {
    const users = await db('users')
      .select('*')
      .timeout(1500)
    res.send(users);
  });

  // Retrieve all the of the fixtures that have not started ("NS") yet
  app.get('/api/gameweek', async (req , res) => {
    const gameweek = await db('fixtures')
      .select('gameweek','isFinished','date')
      .where("isFinished", "NS")
      .timeout(1500)
    res.send(gameweek);
  });


  // Send the user's predication into the database
  app.post('/api/predications', async (req, res) => {
    const homeCheck = (home : Boolean, away : Boolean) => {
      if (home > away) {
        return true;
      }
      if (home < away) {
        return false;
      } else {
        return null;
      }
    };

    const awayCheck = (home: Boolean, away: Boolean) => {
      if (home < away) {
        return true;
      }
      if (home > away) {
        return false;
      } else {
        return null;
      }
    };

    try {
      await Promise.all(req.body.predications.map(async (check: any[]) => {
        await db('predications')
          .join('fixtures', 'predications.game_id', '=', 'fixtures.id')
          .where('username', req.body.userEmail)
          .where('game_id', check[0])
          .delete();
      }));
      await Promise.all(req.body.predications.map(async (predict: Boolean[]) => {
        await db('predications').insert({
          username: req.body.userEmail,
          current_gameweek: req.body.current_gameweek,
          game_id: predict[0],
          home_predication: predict[1],
          away_predication: predict[2],
          home_winner_predication: homeCheck(predict[1], predict[2]),
          away_winner_predication: awayCheck(predict[1], predict[2]),
        });
      }));
      res.send('Data entered into the predications table!').status(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error occurred while entering data!');
    }
  });

  // Retrieve the predications data
  app.get('/api/predications', async (req, res) => {
    const predications = await db('predications')
      .select('*')
      .timeout(1500)
    res.send(predications);
  });

  // Create a query to compare the actual results and the predicated results
  app.get('/api/results', async (req, res) => {
    const results = await db('fixtures')
      .join('predications', 'fixtures.id', '=', 'predications.game_id')
      .select(
        'username',
        'fixtures.gameweek',
        'home_team',
        'away_team',
        'fixtures.id',
        'isFinished',
        'home_winner',
        'away_winner',
        'home_score',
        'away_score',
        'home_predication',
        'away_predication',
        'home_winner_predication',
        'away_winner_predication')
    .where('isFinished', 'FT');
    res.send(results)
  })

  // Insert the user's points into the database
  app.post('/api/points', async (req, res) => {
    const { userEmail, points } = req.body;
    if (!points || points.length === 0) {
      return res.status(400).send('Points array is empty');
    }
  
    try {
      await Promise.all(points.map(async (check: any[]) => {
        await db('points')
          .join('fixtures', 'points.game_id', '=', 'fixtures.id')
          .where('username', userEmail)
          .where('fixtures.gameweek', check[2])
          .delete();
      }));
      await Promise.all(
      
        points.map(([gamePoints, gameId, gameweek]: [number, number, string]) =>
          db('points').insert({
            username: userEmail,
            game_id: gameId,
            gameweek: gameweek,
            game_points: gamePoints,
          })
        )
      );
      res.send('Points inserted');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

  // Get the user's gameweek points
  app.get('/api/total', async (req, res) => {
    try {
      const total = await db('points')
        .select('*')
        .timeout(1500)
      res.send(total);
    } catch (error) {
      console.error(error);
    }
  });

  // Send the user's weekly total to the overall table 
  app.post('/api/overall', async (req, res) => {
    const { userEmail } = req.body;
    const points = await db('points').where('username', userEmail).select('game_points');
    const gameweek = await db('points').where('username', userEmail).select('gameweek');
    const overall = points.reduce((prev: number, curr: { game_points: number}) => prev + curr.game_points, 0);

    try {
      await db('overall')
        .where('username', userEmail)
        //.where('gameweek', Object.values(gameweek[0]).toString())
        .delete();
      await db('overall').insert({
        username: userEmail,
        gameweek: Object.values(gameweek[0]).toString(),
        overall_points: overall
      });
      res.send('Overall inserted');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error');
    }
  });

  return app;
};



//module.exports = setupServer;