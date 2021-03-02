// LOAD DATA

const db = require('../../db/db.json');
const fs = require('fs');
const path = require('path');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

// ROUTING

module.exports = (app) => {
  // API GET Requests

  app.post('/api/notes', (req, res) => {
      db.push(req.body);
      res.json(true);
    });

  app.get('/api/notes', (req, res) => {
    fs.readFile("../../db/db.json", "utf8", (err, data) => {
      if (err) {
        throw err
      }
      else {
        console.log(data);
      }
      console.log(data);
    });
  });

};
