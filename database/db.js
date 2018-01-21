var mongoose = require('mongoose');

// mongoose.connect(process.env.DB_HOST);
mongoose.Promise = global.Promise;

// start connection
async function run(){
	await mongoose.connect(process.env.DB_HOST, {
		useMongoClient: true
	});
}
