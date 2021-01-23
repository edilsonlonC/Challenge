'use strict'
const express = require('express')
const app = express()
const debug = require('debug')('R1:index')
const port = process.env.PORT || 3000
const router = require('./router/router')
const handler = require('./handler/handler')
app.use(express.json())
app.use('/api', router)
app.use('*', handler.serverError)

if (!module.parent) {
  app.listen(port, (err) => {
    if (err) return debug(err)
    console.log(`Server is running on port ${port}`)
    debug('server running')
  })
} else module.exports = app
