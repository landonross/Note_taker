// DEPENDENCIES

const path = require('path');

// ROUTING

module.exports = (app) => {
  // => HTML GET Requests

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  // If no matching route is found default to index.html

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, '/public/index.html'));
  // });
};
