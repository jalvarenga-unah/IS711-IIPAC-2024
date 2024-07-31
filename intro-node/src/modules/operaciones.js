
// CommonJS

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const multiplicacion = (a, b) => a * b
const division = (a, b) => a / b

// ES6 Modules
// export default {
//     suma,
//     resta,
//     multiplicacion,
//     division
// }

module.exports = {
    suma,
    resta,
    multiplicacion,
    division
}