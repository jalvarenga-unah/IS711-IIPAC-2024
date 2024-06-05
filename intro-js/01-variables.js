// console.log('Hola mundo!!!')
// Infiere el tipo de dato

// ❌ ya no se debe usar

// define las variables a nivel global
// no valida que ya haya sido declara otra 
// variable con el mismo nombre
var nombre = 'Juan'

// ✅ forma correcta
// define las variables a nivel de bloque
let apellido = 'Alvarenga'

const edad = 30
{
    let nombre = 'Pedro'
    let apellido = 'Perez'

    {
        nombre = 'Maria'
    }
    // un nuevo Scope
    console.log('------- dentro de las llaves -------')
    //Template strings
    console.log(`${nombre} ${apellido}`)
    console.log(nombre + ' ' + apellido + ' ' + edad)
    console.log()
    console.log(edad)
}
console.log('------- fuera de las llaves -------')
console.log(nombre)
console.log(apellido)

