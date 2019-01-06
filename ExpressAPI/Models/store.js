var mongoose = require('mongoose');  
var StoreSchema = new mongoose.Schema({  
  store_code:String,
  name: String,
  channel_id: Number,
  region_id: Number,
  type: String,
  area: String,
  isactive:Boolean
},{
  versionKey: false // You should be aware of the outcome after set to false
});
mongoose.model('Store',StoreSchema);

module.exports = mongoose.model('Store');

  