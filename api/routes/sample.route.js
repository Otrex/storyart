const route = require('express').Router()
const AuthController = require('../http/controllers/sample.controller')
const { SampleController } = require('../http/controllers/sample.controller')


route 
    .get('/', AuthController.login)


module.exports = route