'use strict'

const axios = require('axios')
const config = require('../config/config')
const debug = require('debug')('R1:controller')
const filterInfo = require('../utilities')
async function covid (req, res, next) {
  try {
    const { url } = config
    const result = await axios.get(url)
    const data = filterInfo(result.data)
    return res.send({
      data
    })
  } catch (e) {
    debug(e)
    console.log(e)
    next(e)
  }
}

module.exports = {
  covid
}
