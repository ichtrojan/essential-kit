// Require MongoDB
let mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Start connection
mongoose.connect(process.env.DB_HOST).then(function (e){
	console.log('Connected to MongoDB! 😃🔥')
}).catch(function (e){
	console.error('Failed to connect to MongoDB 😕💥 ')
})
