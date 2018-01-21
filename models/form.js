//Require Mongoose
var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String
});

mongoose.model('Form', FormSchema);

module.exports = mongoose.model('Form');
