var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String
},{
  versionKey: false // You should be aware of the outcome after set to false
});
mongoose.model('Category', UserSchema);

module.exports = mongoose.model('Category');