var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  monthnum: Number
},{
  versionKey: false // You should be aware of the outcome after set to false
});
mongoose.model('Month', UserSchema);

module.exports = mongoose.model('Month');