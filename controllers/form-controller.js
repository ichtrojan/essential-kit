// Require mongoose
let mongoose = require('mongoose')
let User = require('../models/form')

// Save users
exports.save = (req, res, next) => {
  let form = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })

  // Save Data
  form.save()

  // Redirect back to form
  res.redirect('/form')
}
