// require the router and db items needed
const router = require("express").Router();

const { json } = require("express/lib/response");
// const path = require("path");

const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");

// set up a get/post/ methods as responses to the database
router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

router.get('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id === noteId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});

router.post("/notes", (req, res) => {
  const { title, text, id } = req.body;
  const newNote = {
    title,
    text,
    id: uuidv4(),
  };
  if (req.body) {
    readAndAppend(newNote, "./db/db.json");
    res.json("New Note added!");
  } else {
    res.error("Can not add note.");
  }
});

// export the router
module.exports = router;
