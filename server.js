// Require dotenv
require('dotenv').config()

// Import our packages
let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let mongoose = require('mongoose')
let cookieParser = require('cookie-parser')
let session = require('express-session')
let bodyParser = require('body-parser')
let csrf = require('csurf')

// Require our Routes
let routes = require('./routes/web')

// Require Database configurations
let mongoDB = require('./database/mongo')

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

// Routes Middleware
app.use(routes)

// Catch 404
app.use((req, res) => {
  res.status(404)
  res.render('404')
})

// Serve Application
app.listen(PORT, (req, res, next) => {
  console.log('now serving on port ' + PORT)
})

module.exports = app
