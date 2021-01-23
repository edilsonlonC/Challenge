'use strict'
const debug = require('debug')('R1:handler')
function serverError (err, req, res, next) {
  debug(err)
  return res.sendStatus(500)
}

module.exports = {
  serverError
}
