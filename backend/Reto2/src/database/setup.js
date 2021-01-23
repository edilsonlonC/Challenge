const { Sequelize } = require('sequelize')

const config = require('../config/config')
let sequelize = null

module.exports = function () {
  if (!sequelize) {
    const { database, host, username, password } = config
    sequelize = new Sequelize(database, username, password, {
      dialect: 'postgres',
      logging: false,
      host
    })
  }
  return sequelize
}
