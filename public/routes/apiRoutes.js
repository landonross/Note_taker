// LOAD DATA

const fs = require('fs');


// ROUTING

module.exports = (app) => {

    let notes = require("../../db/db.json")

  app.get("/api/notes", (req, res)=>{
    return res.json(notes)
  })
  
  app.get("/api/notes/:id", (req, res) => {
    // console.log(req.params.id)
    const id = req.params.id;
    let found;
    notes.forEach(n => {
      if (id == n.id){
        found = n;
        return res.json(n)
      }
    })
    return res.json(false)
  })

//Takes the note and saves it for the user in the server
  app.post("/api/notes", (req, res) => {
    //Give the newly added notes an ID so that we can referrence them later to delete them.
    const newNote = req.body;
    if (notes.length === 0){
      newNote.id = 1
    } else {
      newNote.id = (notes[notes.length-1].id + 1);
    }
    notes.push(newNote);
    let jsonNotes = JSON.stringify(notes)
    fs.writeFile("./db/db.json", jsonNotes, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Note saved!");
    })
    res.json(true)
  })

  //Delete function for saved notes
  //Lots of help from https://www.freecodecamp.org/news/lets-clear-up-the-confusion-around-the-slice-splice-split-methods-in-javascript-8ba3266c29ae/
  //Also, https://www.geeksforgeeks.org/how-to-read-and-write-json-file-using-node-js/ for general info.
  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    notes.forEach((n, index) => {
      if(id == n.id){
        //splice takes the appropriate element out of the array.
        notes.splice(index,1)
        //Slice copies a given part of an array and returns that copied part as a new array.
        const notesCopy = notes.slice();
        let jsonNotes = JSON.stringify(notesCopy)
        //After the splice/slice we are able to take the new array and paste it back into the page for the user.
        fs.writeFile("./db/db.json", jsonNotes, function(err) {
          if (err) {
            return console.log(err);
          }
          console.log("As you command, so it shall be.");
        })

      }
    })
    res.json(true);
  })

};
