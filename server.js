var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')

//Initiate Express
var app = express()

//Define Desired Port here
const PORT =  3333

//favicon (would uncomment this when we have a stable page)
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//Define Routes Here
var index = require('./routes/index')

//Add Routes Middlewares Here
app.use('/', index);

//Middlewares Here
app.use(express.static(path.join(__dirname, 'public')))

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})
