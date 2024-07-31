
// ES6 Modules
// import resta from './modules/operaciones.mjs'

//CommonJS
const { suma, resta } = require('./modules/operaciones.js')

const resultado = resta(6, 30)

console.log(resultado)