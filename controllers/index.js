const router = require('express').Router()
const api = require('./api')
const control = require('./control-routes.js')
const home = require('./home-routes.js')
router.use('/api', api)
router.use('/dashboard', control)
router.use('/', home)
module.exports = router