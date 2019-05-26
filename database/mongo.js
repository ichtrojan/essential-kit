// Require MongoDB
let mongoose = require('mongoose')
mongoose.Promise = global.Promise

// Start connection
mongoose.connect(process.env.DB_HOST,{ useNewUrlParser: true } ).then((e) => {
	console.log('Connected to MongoDB! 😃🔥')
}).catch((e) => {
	console.error('Failed to connect to MongoDB 😕💥 ')
})
