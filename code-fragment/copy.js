const fs = require('fs-extra')
const config = require('./js-fragments/.vuepress/config')

fs.move('./js-fragments/.vuepress/dist', `../${config.base}`, { overwrite: true }).catch(console.error)
