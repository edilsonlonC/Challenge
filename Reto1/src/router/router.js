'use strict'

const router = require('express').Router()
const controller = require('../controller/controller')

router.get('/', controller.covid)

module.exports = router
