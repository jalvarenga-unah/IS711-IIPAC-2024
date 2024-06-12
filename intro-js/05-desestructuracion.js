

const producto = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
        rate: 3.9,
        count: 120
    }
}

// const id = producto.id
// const title = producto.title
// const price = producto.price
// const image = producto.image

const image = 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'

//desestructurar
const { id, title, price, image: myImage, rating } = producto

const { count } = rating

console.log(id)
console.log(title)
console.log(price)
console.log(image) // mi constante, existe previamente
console.log(myImage) // el valor de la propiedad image del objeto producto 
console.log(count)


const listaPostres = ['Torta de chocolate', 'Helado de limón', 'Tiramisú']

const { length } = listaPostres

// const [ , , ultimo] = listaPostres

const ultimo = listaPostres[listaPostres.length - 1]

console.log('tamaño lista:', length)

console.log(ultimo)
// console.log(resto)
// console.log(postre3)

