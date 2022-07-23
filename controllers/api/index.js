const router = require('express').Router()
const noteRoute = require('./note-routes')
const postRoute = require('./post-routes.js')
const userRoute = require('./user-routes')
router.use('/comment', noteRoute)
router.use('/post', postRoute)
router.use('/user', userRoute)
module.exports = router