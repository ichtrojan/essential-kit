//require dotenv
require('dotenv').config()

// import our packages
let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let flash = require('connect-flash')
let bodyParser = require('body-parser')
let csrf = require('csurf')

//Require our Routes
let route = require('./routes/web')

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

// bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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
