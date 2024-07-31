
const os = require("node:os")

const nombre = 'Juan Alvarenga'

console.log(`Hola ${nombre}`)
console.log(os.platform())
console.log(os.freemem() / 1024 / 1024 / 1024)
console.log(os.totalmem() / 1024 / 1024 / 1024)
console.log(os.uptime() / 60 / 60)
