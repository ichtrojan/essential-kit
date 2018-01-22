//require dotenv
require('dotenv').config()

// import our packages
let express  = require('express')
let path     = require('path')
let favicon  = require('serve-favicon')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let session    = require('express-session')
let flash      = require('connect-flash')
let bodyParser = require('body-parser')
let csrf       = require('csurf')
let route      = require('./_routes/web'); // all request pass here
let { check, validationResult } = require('express-validator/check')
let { matchedData, sanitize }   = require('express-validator/filter')

//Require Database configurations
let db = require('./database/db')

//Initiate Express
let app = express()

//Define Desired Port Here
let PORT = process.env.PORT

//View Engine
app.set('view engine', 'pug')

//set Middlewares for security
app.use(cookieParser())

// let app use the session
app.use(session({
  secret: 'keyboard',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// let use the flash 
app.use(flash());

// let app use the flashes
app.use(function (req, res, next){
	res.locals.flashes = req.flash();
	next();
});

// bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// csrf
app.use(csrf({ cookie: true }))

// set public static path
app.use(express.static(path.join(__dirname, './public')))

//set favicon
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))

// let us do laravel pattern web.js (Entry point URI)
app.use('/', route)

// Catch 404
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

//Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})

module.exports = app
