// Require mongoose
let mongoose = require('mongoose')
let User = require('../models/form')

// Save details
exports.save = (req, res, next) => {
  let form = new Detail({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })

  // Save Data
  form.save()

  // Redirect back to form
  res.redirect('/form')
}
