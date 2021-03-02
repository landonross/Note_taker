// LOAD DATA

const db = require('../../db/db.json');

// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.post('/api/notes', (req, res) => {
      db.push(req.body);
      res.json(true);
    });

  app.get('/api/notes', (req, res) => res.json(db));

};
