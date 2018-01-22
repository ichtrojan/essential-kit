// import express 
let express = require('express')
let router = express.Router()
let Pages = require('../_controllers/pages-controller')

// using the express router 
router.get('/', Pages.homepage) // show  homepage
router.get('/form', Pages.showForm) // show the html form
router.post('/form', Pages.saveUser) // perform the query

// export to route as form
module.exports = router;