const express = require('express');
const db = require('./knex')
const path = require('path');
//const { auth } = require('../frontend/src/firebase/firebase')
//import { homeCheck, awayCheck } from './backend-utils/winner-check'


function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.use(express.json());
  
  app.get('/hello', (req, res) => {
    res.send('world');
  });

  app.get('/fixtures', async (req,res) => {
    const fixtures= await db('fixtures') 
     .select('*')
     .timeout(1500)
     res.send(fixtures);
  });

  app.get('/users', async (req, res) => {
    const users = await db('users')
    .select('*')
    .timeout(1500)
    res.send(users);
  });

  app.post('/api/predications', async (req, res) => {

    const homeCheck = (home, away) => {
      if (home > away) {
        return true;
      }
      if (home < away) {
        return false;
      }
      else {
        return null;
      }
    };
    
    const awayCheck = (home, away) => {
      if (home < away) {
        return true;
      }
      if (home > away) {
        return false;
      }
      else {
        return null;
      }
    };


    try {
      await db('predications').where('username', req.body.userEmail).delete();
      await Promise.all(req.body.predications.map(async predict => {
        await db('predications').insert({
          username: req.body.userEmail,
          game_id: predict[0],
          home_predication: predict[1],
          away_predication: predict[2],
          home_winner_predication: homeCheck(predict[1],predict[2]),
          away_winner_predication: awayCheck(predict[1],predict[2])
        });
      }));
      res.send('Data entered!').status(200);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error occurred while entering data!');
    }
  });

  app.get('/api/predications', async (req, res) => { 
    const predications = await db('predications')
    .select('*')
    .timeout(1500)
    res.send(predications); 
  });



  return app;
};





module.exports = setupServer;


/*
 app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      res.send(userCred).status(200)
    } catch (error) {
      res.status(400)
    }
  });
  */