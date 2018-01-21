// //Require Mongoose
// var mongoose = require('mongoose');

// var FormSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   address: String
// });

// mongoose.model('Form', FormSchema);

// module.exports = mongoose.model('Form');

// // import mogoose
var mongoose = require('mongoose');
// // import promise
// mongoose.Promise = global.Promise;
// if i want to use promise


// create a posts Schema
var Users = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: "input name, field can not be empty"
	},
	email: {
		type: String,
		trim: true,
		required: "can not post empty card"
	},
	address: {
		type: String,
		trim: true,
		required: "can not post empty card"
	}
});

module.exports = mongoose.model('Users', Users);
