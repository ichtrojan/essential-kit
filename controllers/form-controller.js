// require mongoose
let mongoose = require('mongoose')
let User = require('../models/form')

// save users
exports.save = (req, res, next) => {
  let form = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  })

  // save posts
  form.save();

  // redirect home
  res.redirect('/form')
}
