// require the path and router items needed
const { dirname } = require("path");
const path = require("path");
const router = require("express").Router();

// need to add the router.get functionality for each of the html pages
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
// export the routes
module.exports = router