// Require dotenv
require('dotenv').config()

// Import our packages
let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let flash = require('connect-flash')
let bodyParser = require('body-parser')
let csrf = require('csurf')

// Require our Routes
let routes = require('./routes/web')

//Require Database configurations
// to use postgres/mysql as default database comment out the code below
// let db = require('./database/db')

// Initiate Express
let app = express()

// Define Desired Port Here
let PORT = process.env.PORT

// View Engine
app.set('view engine', 'pug')

// Set Middlewares for security
app.use(cookieParser())

// Set session
app.use(session({
  secret: 'keyboard',
  resave: true,
  saveUninitialized: true,
  cookie: { secure: true }
}))

// BodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CSRF
app.use(csrf({ cookie: true }))

// Set public static path
app.use(express.static(path.join(__dirname, './public')))

// Set favicon
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')))

//set fash Middleware
app.use(flash())

//Define Routes Here
let index = require('./routes/index')
let form = require('./routes/form')
let forms = require('./routes/forms')

//Add Routes Middlewares Here
app.use('/', index)
app.use('/form', form)
app.use('/forms', forms)

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
