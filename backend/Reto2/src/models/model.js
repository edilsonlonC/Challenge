const { DataTypes } = require('sequelize')
const setup = require('../database/setup')
module.exports = function () {
  const sequelize = setup()
  const model = sequelize.define('model', {
    id_de_caso: {
      type: DataTypes.INTEGER,
      unique: true
    },
    fecha_reporte_web: {
      type: DataTypes.STRING
    },
    fecha_de_notificaci_n: {
      type: DataTypes.STRING
    },
    departamento: {
      type: DataTypes.STRING
    },
    departamento_nom: {
      type: DataTypes.STRING
    },
    ciudad_municipio: {
      type: DataTypes.STRING
    },
    ciudad_municipio_nom: {
      type: DataTypes.STRING
    },
    edad: {
      type: DataTypes.INTEGER
    },
    unidad_medida: {
      type: DataTypes.INTEGER
    },
    sexo: {
      type: DataTypes.STRING
    },
    fuente_tipo_contagio: {
      type: DataTypes.STRING
    },
    ubicacion: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    },
    pais_viajo_1_cod: {
      type: DataTypes.STRING
    },
    pais_viajo_1_nom: {
      type: DataTypes.STRING
    },
    recuperado: {
      type: DataTypes.STRING
    },
    fecha_inicio_sintomas: {
      type: DataTypes.STRING
    },
    fecha_diagnostico: {
      type: DataTypes.STRING
    },
    fecha_recuperado: {
      type: DataTypes.STRING
    },
    tipo_recuperacion: {
      type: DataTypes.STRING
    },
    per_etn_: {
      type: DataTypes.INTEGER
    }

  })
  return model
}
