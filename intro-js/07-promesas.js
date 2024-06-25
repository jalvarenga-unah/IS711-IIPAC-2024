

const miPromesa = ({ valor }) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valor === 0 || Number(valor)) {
                resolve("Es un número")
            }
            reject("El valor enviado no es un número")
        }, 3000)
    });
}


function resuelta(resultado) {
    console.log('la promesa se resolvió exitosamente')
    console.log(resultado)
}

function rechazada(error) {
    console.log(error)
}


// ejecucion de forma asincrona
// miPromesa({ valor: 0 })
//     .then((resultado) => {
//         console.log('la promesa se resolvió exitosamente')
//         console.log(resultado)
//     })
//     .catch((error) => {
//         rechazada(error)
//     })
//     .finally(() => {
//         console.log('tarea finalizada')
//     })

// console.log('puedo seguir haciendo mas cosas')

console.log('tarea iniciada')

// ejecucion de forma sincrona

async function ejecutarPromesa() {

    try {
        const resultado = await miPromesa({ valor: 0 })
        resuelta(resultado)
    } catch (error) {
        rechazada(error)
    }

}

Promise.all([
    ejecutarPromesa(),
    ejecutarPromesa(),
    ejecutarPromesa(),
    ejecutarPromesa()
]).then(() => {
    console.log('hacer mas cosas')
})



// (async () => {
//     await ejecutarPromesa()
//     await ejecutarPromesa()
//     await ejecutarPromesa()
//     await ejecutarPromesa()
//     console.log('hacer mas cosas')
// })()





