const express = require("express");
const router = express.Router();
const db = require("../models");

// Get all suggestions in the database
// Passed test call
router.get("/", (req, res) => {
  db.Suggestion.find({})
    .then((allChats) => {
      res.json(allChats);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

// Add suggestion to suggestion collecton
// Passed test call
router.post("/new", (req, res) => {
  // if(!req.session.user){
  //   res.status(401).send("login required")
  // } else{
    db.Suggestion.create({
//       userId: req.session.user.id,
      userId: req.body.userId,
      mapId: req.body.mapId,
      title: req.body.title,
      category: req.body.category,
      description: req.body.description,
      link: req.body.link,
      cost: req.body.cost,
    }).then((newSuggestion) => {
      res.json(newSuggestion);
    }).catch((err) => {
      console.log(err);
      res.status(500).end();
    });
  })

// Delete a suggestion by id
// Passed a test call
router.delete("/delete", (req, res) => {
  db.Suggestion.deleteOne({
    _id: req.body.id,
  }).then((data) => {
    res.json(data);
  }).catch((err) => {
    console.log(err);
    res.status(500).end();
  });
});

module.exports = router;
