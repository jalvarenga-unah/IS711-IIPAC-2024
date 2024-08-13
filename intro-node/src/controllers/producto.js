
const { validarProducto, validarProductoParcial } = require('../schemas/producto.js')
const crypto = require('node:crypto')
const productos = require('../store/productos.json')

class ProductoController {
    static getProductos(req, res) {

        res.json(productos)

    }

    static getProductoById(req, res) {

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

    }

    static saveProduct(req, res) {
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
    }

    static updateProduct(req, res) {

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


    }

    static deleteProduct(req, res) {

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
    }

}


module.exports = { ProductoController }
