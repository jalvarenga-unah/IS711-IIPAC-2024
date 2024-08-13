const { ProductoController } = require('../controllers/producto.js')
const { Router } = require('express')

const routerPoductos = Router()

routerPoductos.get('/', ProductoController.getProductos)
routerPoductos.get('/:id', ProductoController.getProductoById)
routerPoductos.post('/', ProductoController.saveProduct)
routerPoductos.delete('/:id', ProductoController.deleteProduct)
routerPoductos.patch('/:id', ProductoController.updateProduct)

module.exports = {
    routerPoductos
}