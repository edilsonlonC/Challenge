'use strict'

function filterInfo (data) {
  const info = data.reduce((previous, current) => {
    if (!previous['0_20_F']) previous['0_20_F'] = []
    if (!previous['0_20_M']) previous['0_20_M'] = []
    if (!previous['20_40_F']) previous['20_40_F'] = []
    if (!previous['20_40_M']) previous['20_40_M'] = []
    if (!previous['40_F']) previous['40_F'] = []
    if (!previous['40_M']) previous['40_M'] = []
    if (current.edad >= 0 && current.edad < 20 && current.sexo === 'F') previous['0_20_F'].push(current)
    if (current.edad >= 0 && current.edad < 20 && current.sexo === 'M') previous['0_20_M'].push(current)
    if (current.edad >= 20 && current.edad < 40 && current.sexo === 'F') previous['20_40_F'].push(current)
    if (current.edad >= 20 && current.edad < 40 && current.sexo === 'M') previous['20_40_M'].push(current)
    if (current.edad >= 40 && current.sexo === 'F') previous['40_F'].push(current)
    if (current.edad >= 40 && current.sexo === 'M') previous['40_M'].push(current)
    return previous
  }, {})
  return info
}

module.exports = filterInfo
