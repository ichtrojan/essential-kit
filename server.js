var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')

const { check, validationResult } = require('express-validator/check')
const { matchedData, sanitize } = require('express-validator/filter')
//Initiate Express
var app = express()

//Define Desired Port Here
const PORT = 3333

//View Engine
app.set('view engine', 'pug')

//Set Public folder
app.use(express.static('public'));

//favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//Define Routes Here
var index = require('./routes/index')
var form = require('./routes/form')

//Add Routes Middlewares Here
app.use('/', index)
app.use('/form', form)

//Middlewares Here
app.use(express.static(path.join(__dirname, 'public')))

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})
