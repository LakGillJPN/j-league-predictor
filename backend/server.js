const express = require('express');
//const cors = require('cors')
const db = require('./knex')
const path = require('path');

function setupServer() {
  const app = express();

  app.use(express.static(path.resolve(__dirname, '../client/build')));
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
  

  return app;
};



module.exports = setupServer;