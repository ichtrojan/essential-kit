//Require MongoDB
var mongoose = require('mongoose')
mongoose.Promise = global.Promise

// start connection
mongoose.connect(process.env.DB_HOST).then(function (e){
	console.log('Connected to MongoDB!')
}).catch(function (e){
	console.error('Failed to connect to MongoDB')
})
