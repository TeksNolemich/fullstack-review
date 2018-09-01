const request = require('request');
const config = require('../config.js');
const save = require('../database/index.js');
let getReposByUsername = (username) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let callback = (error, response, body) => {
    var info; 
    if (!error && response.statusCode == 200) {
      info = JSON.parse(body);
    }
    save.save(info);
  };

  request(options, callback);
}


module.exports.getReposByUsername = getReposByUsername;