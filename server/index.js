const express = require('express');
const mongoose = require("mongoose")
const {repo , save} = require ("../database/index.js");
const { json } = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(json())
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', async function (req, res) {
  try {
    const repos = await repo.find({});
    res.json(repos);
    console.log("Retrieved todos from MongoDB");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});