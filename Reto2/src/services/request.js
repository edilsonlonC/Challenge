
const axios = require('axios')
const infectedModel = require('../models/model')()
const debug = require('debug')('R2:request')
const { url } = require('../config/service-config')
function request () {
  setTimeout(() => {
    axios.get(url).then(response => {
      infectedModel.bulkCreate(response.data, { ignoreDuplicates: true }).then(() => {
        debug('Insert into database')
			}).catch(e => console.error(e))
    })
    request()
  }, 600000)
}

module.exports = {
  request
}
