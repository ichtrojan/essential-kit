let express = require('express')
let bodyParser = require('body-parser')
let { check, validationResult } = require('express-validator/check')
let { matchedData, sanitize } = require('express-validator/filter')
let app = express()

let Form = require('../models/form')

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('form', { csrfToken })
})

// Add a form data
app.post('/', (req, res) => {
  let form = new Form({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })

  // save posts
  form.save()

  // redirect home
  res.redirect('/form')
});

module.exports = app
