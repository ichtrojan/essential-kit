let express = require('express')
let Route = express()
let form = require('../controllers/form-controller')

// Get index.pug
Route.get('/', (req, res, next) => {
  res.render('index')
})

// Get form.pug and pass the csrf token
Route.get('/form', (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('form', { csrfToken })
})

// Post request for form data
Route.post('/form', form.save)

module.exports = Route
