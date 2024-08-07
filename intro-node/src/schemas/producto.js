const z = require('zod');


const productoSchema = z.object({
    "title": z.string().required().min(10),
    "price": z.number().min(1).require(),
    "description": z.string().required().min(20),
    "category": z.enum(["jewelery", "electronics", "women's clothing", "men's clothing"]),
    "image": z.url().required(),
})

const validarProducto = (data) => {

    return productoSchema.safeParse(data)

}

module.exports = {
    validarProducto
}