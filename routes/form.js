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

  // let data = {
  //   name: check(req.body.name).withMessage('must be a valid name'),
  //   email: check(req.body.email).isEmail().withMessage('must be a valid email'),
  //   address: check(req.body.address).trim().withMessage('must be a valid address')
  // }

  // Form.create({
  //   name : data.name,
  //   email : data.email,
  //   address : data.address
  // }, (err, data) => {
  //   if (err) {
  //     return res.status(500).send("There was a problem adding the information to the database.")
  //   }

  //   res.status(200).send(data)
  // });

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

// app.get('/:id', (req, res) => {
//   Form.findById(req.params.id,  (err, data) => {
//     if (err) {
//       return res.status(500).send("There was a problem finding the data.")
//     }

//     if (!data) {
//       return res.status(404).send("No data found.")
//     }

//     res.status(200).send(data)
//   });
// });

// app.put('/:id', (req, res) => {
//   Form.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, user) => {
//     if (err) {
//      return res.status(500).send("There was a problem updating the user.")
//     }

//     res.status(200).send(user)
//   });
// });

module.exports = app
