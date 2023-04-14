const express = require('express');
const db = require('./knex')
const path = require('path');
//const { auth } = require('../frontend/src/firebase/firebase')


function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../frontend/build')));
  app.use(express.json());
  
  app.get('/hello', (req, res) => {
    res.send('world');
  })

  app.get('/fixtures', async (req,res) => {
    const fixtures= await db('fixtures') 
     .select('*')
     .timeout(1500)
     res.send(fixtures);
  })

  app.get('/users', async (req, res) => {
    const users = await db('users')
    .select('*')
    .timeout(1500)
    res.send(users);
  })

  app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      res.send(userCred).status(200)
    } catch (error) {
      res.status(400)
    }
  });


  

  

  

  return app;
};



module.exports = setupServer;