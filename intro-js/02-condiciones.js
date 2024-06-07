
//? trhuly : todos los demas escenarios
//? falsy : null, 0, NaN, false
//? nulish : undefined, null

//? && , || ! 

let n1 = 0
let n2 = Number('bd') // -> convertir a numero

console.log(n2)

// CAST
if (n1 === n2) {
    console.log('Se cumple')
} else {
    console.log('No se cumple')
}

let n3; // es undefined
//* no se cumple la condicion por ser un nullish
if (n3) {
    console.log('Es undefined')
}

if (!(n1 == 0)) {
    console.log('Es un numero y se cumple la condición')
}

let n4 = 10
const edad = n4 ?? 0 > 18 ? 'es mayor de edad' : 'es menor de edad'

const nombre = null

console.log(` Hola ${nombre ?? 'No hay nombre'} `)

console.log(edad)