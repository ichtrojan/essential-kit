// import express
let express = require('express')
let app = express()
let form = require('../controllers/form-controller')

app.get('/', (req, res, next) => {
  res.render('index')
})

app.get('/form', (req, res, next) => {
  let csrfToken = req.csrfToken()
  res.render('form', { csrfToken })
})

app.post('/form', form.save)

module.exports = app
