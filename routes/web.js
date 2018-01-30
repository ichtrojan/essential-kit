let express = require('express')
let app = express()
let form = require('../controllers/form-controller')

//get index.pug
app.get('/', (req, res, next) => {
  res.render('index')
})

//get form.pug and pass the csrf token
app.get('/form', (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('form', { csrfToken })
})

//post request for form data
app.post('/form', form.save)

module.exports = app
