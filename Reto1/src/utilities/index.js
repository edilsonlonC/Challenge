'use strict'

function filterInfo (data) {
  const info = data.reduce((previous, current) => {
    if (!previous['0_20']) previous['0_20'] = []
    if (!previous['20_40']) previous['20_40'] = []
    if (!previous['40']) previous['40'] = []
    if (current.edad >= 0 && current.edad < 20) previous['0_20'].push(current)
    if (current.edad >= 20 && current.edad < 40) previous['20_40'].push(current)
    if (current.edad >= 40) previous['40'].push(current)
    return previous
  }, {})
  return info
}

module.exports = filterInfo
