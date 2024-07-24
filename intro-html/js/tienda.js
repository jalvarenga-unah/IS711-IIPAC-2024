//? Evento que se ejecuta cuando el DOM ha sido cargado
document.addEventListener('DOMContentLoaded', async () => {

    // const productos = await getProductos()

    // console.log(productos)
})

const getProductos = async () => {

    const response = await fetch('https://fakestoreapi.com/products')

    const productos = await response.json()

    return productos

}



