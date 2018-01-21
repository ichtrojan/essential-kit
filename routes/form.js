var express = require('express')
var bodyParser = require('body-parser')

var app = express()

var Form = require('../models/form')

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }))

// Get all Form Data
app.get('/', (req, res, next) => {
  // Form.find({}, (err, data) => {
  //   if (err) {
  //     return res.status(500).send("There was a problem finding the Form Data.")
  //   }
  //
  //   res.status(200).send(data)
  // })
  var csrfToken = req.csrfToken();
  res.render('form', { csrfToken })
  // console.log(req.csrfToken());
})

// Add a form data
app.post('/', async (req, res) => {

  console.log(req.body._csrf);


  // Form.create({
  //   name : req.body.name,
  //   email : req.body.email,
  //   address : req.body.address
  // }, (err, data) => {
  //   if (err) {
  //     return res.status(500).send("There was a problem adding the information to the database.")
  //   }

  //   res.status(200).send(data)
  // });

  // do save and return back.
  // var form = new Form(req.body);

  // // save posts
  // await form.save();

  // redirect home
  // res.redirect('/');
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
