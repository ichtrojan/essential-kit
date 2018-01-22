let express = require('express')
let bodyParser = require('body-parser')
let { check, validationResult } = require('express-validator/check')
let { matchedData, sanitize } = require('express-validator/filter')
let app = express()

let Form = require('../models/form')

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res, next) => {
  var csrfToken = req.csrfToken();
  res.render('form', { csrfToken })
  // console.log(req.csrfToken());
})


// Add a form data
app.post('/', (req, res) => {
  // do save and return back.
  var form = new Form({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  });

  // save posts
  form.save();

  // request flash
  // var msg = req.flash('success', '1 new created ');

  // redirect home
  res.redirect('/form');
});

module.exports = app
