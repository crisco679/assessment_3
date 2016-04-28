var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  alias: {type: String, required: true, unique: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  city: {type: String, required: true},
  powerName: {}
})

var heroModel = mongoose.model('hero', heroSchema);

module.exports = heroModel;
