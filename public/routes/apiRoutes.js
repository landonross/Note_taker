// LOAD DATA

const db = require('../../db/db.json');
const fs = require('fs');


// ROUTING

module.exports = (app) => {

  let notesData = [];
  // API GET Requests

  // app.post('/api/notes', (req, res) => {
  //     db.push(req.body);
  //     res.json(true);
  //   });

  app.get("/api/notes", function(err, res) {
    try {
      notesData = fs.readFileSync("../../db/db.json", "utf8");
      console.log("hello!");
      notesData = JSON.parse(notesData);
  
      // error handling
    } catch (err) {
      console.log(err);
    }
    res.json(notesData);
  });
  
  app.post("/api/notes", function(req, res) {
    try {
      notesData = fs.readFileSync("../../db/db.json", "utf8");
      console.log(notesData);
  
      notesData = JSON.parse(notesData);

      req.body.id = notesData.length;

      notesData.push(req.body); 
      notesData = JSON.stringify(notesData);

      fs.writeFile("../../db/db.json", notesData, "utf8", function(err) {

        if (err) throw err;
      });
     
      res.json(JSON.parse(notesData));
  
      // error Handling
    } catch (err) {
      throw err;
    }
  });

};
