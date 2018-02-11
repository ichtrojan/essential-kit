let express = require('express')
let bodyParser = require('body-parser')
let { check, validationResult } = require('express-validator/check')
let { matchedData, sanitize } = require('express-validator/filter')
let app = express()

let Model = require('../models/sequelize/models')

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('forms', { csrfToken })
})

// Add a form data
app.post('/', (req, res) => {

  // save posts
  Model.User.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  }).then(user => {
    // the flash message
    req.flash('success', '1 new record created ')
  }).catch(error => {
    req.flash('error', error.message)
  })


  // redirect home
  res.redirect('/forms')
});

module.exports = app
