var mongoose = require('mongoose');

// mongoose.connect(process.env.DB_HOST);
mongoose.Promise = global.Promise;

// start connection
mongoose.connect(process.env.DB_HOST).then(function (e){
	console.log('Connected !');
}).catch(function (e){
	console.error('Fail to connect');
});
