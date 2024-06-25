// el endpoint es del recurso
const url = 'https://fakestoreapi.com/products/frge'

// realiza una peticion con el verbo GET

// ⬇️ Es un API de JS que nos permite hacer peticiones HTTP
fetch(url)
    .then((respuesta) => {

        console.log(respuesta)

        if (respuesta.ok) {
            return respuesta.json()
        }

        throw new Error('No se pudo realizar la peticion: ' + respuesta.statusText)
    }).then((data) => {

        console.log(data)
    }).catch((error) => {
        console.log('Error', error)
    })
