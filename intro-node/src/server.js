const express = require('express');
const cors = require('cors')
const { validarProducto, validarProductoParcial } = require('./schemas/producto.js')
const crypto = require('node:crypto')
const productos = require('./store/productos.json')

// Creación del app de express
const app = express() // instancia de express
app.disable('x-powered-by') // deshabilitar la cabecera x-powered-by

//establecer el puerto
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json()) // Middleware para parsear el body de las peticiones

app.use(cors({
    origin: 'http://localhost:8081', // sudominio.com
    methods: 'GET,POST,PATCH,DELETE',
}))
//RUTAS

app.get('/', (request, response) => {
    response.send('<h1>Mi primer API</h1>')
})

app.get('/saludo/:name', (req, res) => {
    // const nombre = req.params.name
    const { name } = req.params

    // res.send(`<h1>Hola ${name}</h1>`)

    //? https://http.cat
    res
        .status(200)// <- es importante para indicar al nevegador como debe reaccionar ante la respuesta
        .json({ message: `Hola ${name}` })

})


app.get('/productos', (req, res) => {

    res.json(productos)

})

app.get('/productos/:id', (req, res) => {

    const { id } = req.params // todos los parametros son string

    // const castId = Number(id); // la conversión a los tipos correspondientes

    // if (!castId) {
    //     return res
    //         .status(400)
    //         .json({ error: 'El id debe ser un número' })
    // }

    const productoEncontrado = productos.find((producto) => { return producto.id === id })

    if (!productoEncontrado) {

        return res
            .status(404) // Recursos no encontrado
            .json({ error: 'Producto no encontrado' })
    }


    return res.json(productoEncontrado)

})

app.post('/productos', (req, res) => {
    //obtener los datos del body de la peticion enviados desde el cliente
    const data = req.body
    // validar que los datos sean correctos
    const resultados = validarProducto(data)

    if (!resultados.success) {
        //parsear el error y enviarlo al cliente de manera mas amigable
        return res.status(400).json(JSON.stringify(resultados.error))
    }

    // agregar el producto al array de productos (en la BBDD)
    const newProduct = { id: crypto.randomUUID(), ...data }
    productos.push(newProduct)

    // retornar una respuesta al cliente
    return res.status(201).json(newProduct)
})

app.delete('/productos/:id', (req, res) => {

    const { id } = req.params

    const productIndex = productos.findIndex((producto) => producto.id === id)

    if (productIndex === -1) {
        return res
            .status(404)
            .json({ error: 'Producto no encontrado' })
    }

    productos.splice(productIndex, 1)

    return res.status(200).json({
        message: 'Producto eliminado'
    })

})

app.patch('/productos/:id', (req, res) => {

    const { id } = req.params
    const data = req.body

    //buscar el producto en la BBDD
    const productIndex = productos.findIndex((producto) => producto.id === id)

    if (productIndex === -1) {
        return res
            .status(404)
            .json({ error: 'Producto no encontrado' })
    }

    //validar que los datos sean correctos
    const resultado = validarProductoParcial(data)

    if (!resultado.success) {
        return res.status(400).json(JSON.parse(resultado.error))
    }

    //es una nueva referencia de producto (no existe en la BBDD)
    const productoActualizado = { ...productos[productIndex], ...data }

    //actualizar el producto en la BBDD
    productos[productIndex] = productoActualizado

    return res.json(productoActualizado)


})


// lo poner en marcha
app.listen(PORT, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${PORT}`)
})