const mongoose = require('mongoose');
mongoose.connect('mongodb://student:student1@ds137862.mlab.com:37862/github');

let repoSchema = mongoose.Schema({
  id: {type:Number, unique:true},
  name: {type:String, index:{unique: true}},
  size: {type:Number, index:{unique: true}},
  watchers: {type:Number, index:{unique: true}}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr) => {
  // TODO: Your code here
  let Repo = new Repo;
  Repo.insertMany(repoArr, (err) => {
    if (err) return handleError(err);
  });
}

let top = (callback) => {
  Repo.find({}, (err, query) => {
    if (err) {
      callback(err)
    } else {
      callback(null, query);
    }
  });
}



module.exports.save = save;
module.exports.top = top;