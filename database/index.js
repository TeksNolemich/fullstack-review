const mongoose = require('mongoose');
mongoose.connect('mongodb://student:student1@ds137862.mlab.com:37862/github');

let repoSchema = mongoose.Schema({
  id: {type:Number, unique:true},
  name: {type:String},
  size: {type:Number},
  watchers: {type:Number}
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoArr, done) => {
  var saved = Repo.insertMany(repoArr, (err) => {
    if (err) {
      console.log('err ', err)
    };
  });
  // saved.exec(callback);
  if (saved) {
    done();
  }
}

let top = (callback) => {
  var query = Repo.find();
  query.sort({ watchers: 1 }).limit(25);
  query.exec(callback);
}



module.exports.save = save;
module.exports.top = top;