

// * clave y un valor

// objeto / diccionario / mapa
const mascota = {
    nombre: 'Apolo',
    edad: 2,
    comidas_favoritas: ['carne', 'pollo', 'pescado'],
    peso: [
        {
            unidad: 'kg',
            valor: 5
        },
        {
            unidad: 'lb',
            valor: 11 // ⬅️
        }
    ]
}

// console.log(mascota.peso[1].valor)

mascota.raza = 'Terrier' // si existe la clave, actualiza el valor y si no existe, crea la clave

mascota.edad = 3

delete mascota.edad // elimina la propiedad/clave

// console.log(mascota.nombre)
// console.log(mascota.edad) // undefined
// console.log(mascota)


const usuarios = [
    {
        nombre: 'Juan',
        edad: 25,
        email: '',
        address: { // []
            calle: 'Av. Siempre Viva',
            numero: 123,
            geo: {
                lat: 123.123,// ⬅️
                lng: 321.321
            }
        }
    },
    {
        nombre: 'Pedro',
        edad: 25,
        email: '',
        address: { // []
            calle: 'Av. Siempre Viva',
            numero: 123,
            geo: {
                lat: 123.123,// ⬅️
                lng: 321.321
            }
        }
    },
]

// * usuario        => arreglo
// * usuario[0]     => diccionario

console.log(usuarios)
console.log(usuarios[0].nombre)

// * item => diccionario
for (const item of usuarios) {
    console.log(item.nombre)
}

