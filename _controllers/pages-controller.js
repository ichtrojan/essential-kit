// require mongoose 
let mongoose = require('mongoose')
let User = require('../_models/form')

// show homepage
exports.homepage = (req, res, next) => {
  res.render('index')
}

// show add form
exports.showForm = (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('form', { csrfToken })
}

// save users
exports.saveUser = (req, res, next) => {
  // do save and return back.
  let form = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  });

  // save posts
  form.save();

  // request flash
  // let msg = req.flash('success', 'Registration Successful !')

  // redirect home
  res.redirect('/form')
}