const express = require('express');
const bodyParser = require('body-parser');
const getReposByUsername = require('../helpers/github.js');
const retrieval = require('../database/index.js') 
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', bodyParser.json(),function (req, res) {
  // TODO - your code here!
  console.log('called upon');
  getReposByUsername.getReposByUsername(req.body.username);
  res.status(201).send();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  retrieval.top((err, data) => {
    if (err) {
      res.send(err);
    }
    // console.log('sending query data back', data);
    res.send(data);
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

