var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  mobile: Number,
  isactive:Boolean,
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');