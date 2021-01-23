'use strict'
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const sequelize = require('./database/setup')()
const { request } = require('./services/request')
const router = require('./router/router')

request() // insert elements into DB

app.use('/api', router)

if (!module.parent) {
  app.listen(port, async (err) => {
    if (err) console.error(err)
    await sequelize.sync({ force: true })
    console.log(`Server is running on port ${port}`)
  })
} else module.exports = app
