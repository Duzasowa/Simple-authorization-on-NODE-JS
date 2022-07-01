const Router = require('express')
const controller = require('./authController')
const router = new Router()

router.post('/login', controller.login)

module.exports = router