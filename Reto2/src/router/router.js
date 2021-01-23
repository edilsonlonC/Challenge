'use strict'

const router = require('express').Router()
const infectedModel = require('../models/model')()
const debug = require('debug')('R2:api')
const sequelize = require('../database/setup')()
const { Op } = require('sequelize')

router.get('/', async (req, res, next) => {
  try {
    const gender = req.query.genero ? req.query.genero : null
    const status = req.query.estado ? req.query.estado : null
    const city = req.query.ciudad ? req.query.cuidad : null
    if (!gender && !status && !city) {
      const infected = await infectedModel.findAll()
      return res.send({
        data: infected
      })
    }
    debug(gender, status, city)
    const infected = await infectedModel.findAll({
      where: {
        [Op.or]: [
          sequelize.where(
            sequelize.fn('lower', sequelize.col('ciudad_municipio_nom')), sequelize.fn('lower', city)
          ),
          { estado: status },
          { sexo: gender }
        ]
      }
    })
    return res.send({
      data: infected
    })
  } catch (e) {
    next(e)
  }
})

module.exports = router
