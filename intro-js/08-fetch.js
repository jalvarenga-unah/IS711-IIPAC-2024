// el endpoint es del recurso
const url = 'https://fakestoreapi.com/products'

// realiza una peticion con el verbo GET

// ⬇️ Es un API de JS que nos permite hacer peticiones HTTP
fetch(url) // GET
    .then((respuesta) => {
        //Response
        if (respuesta.ok) {
            return respuesta.json()
        }

        throw new Error('No se pudo realizar la peticion: ' + respuesta.statusText)
    }).then((productos) => {


        const nuevosProductos = productos.map((producto) => {
            // producto.category = null

            const { category, price } = producto
            let nuevoPrecio = price

            if (category == "men's clothing")
                nuevoPrecio = parseFloat((price * 1.05).toFixed(2))

            producto.price = nuevoPrecio

            return producto

        })



        const ropaHombre = nuevosProductos.filter((producto) => {
            if (producto.category == "men's clothing") return producto
        })

        //* es lo mismo que tengo arriba
        // const ropaHombre = nuevosProductos.filter((producto) =>
        //     (producto.category == "men's clothing")
        // )

        const prenda = ropaHombre.find(({ title }) => !title.includes('Slim'))

        // const costo = ropaHombre.every((producto) => { return producto.price > 100 } )
        const costoDeTodos = ropaHombre.every(({ price }) => price > 100)
        const costoDeAlguno = ropaHombre.some(({ price }) => price > 100)


        console.log(prenda)
        // console.log(costo)



    }).catch((error) => {
        console.log('Error', error)
    })


//consumir fetch con async await
const getProductos = async () => {

    try {
        const response = await fetch(url) // GET

        if (!response.ok) {
            throw new Error('No se pudo realizar la peticion: ' + response.statusText)
        }

        const productos = await response.json()

        //tomar los productos y dibujarlos en el HTML   


    } catch (error) {
        console.log('Error', error)
    }

}