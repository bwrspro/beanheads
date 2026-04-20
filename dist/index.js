
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./beanheads.cjs.production.min.js')
} else {
  module.exports = require('./beanheads.cjs.development.js')
}
