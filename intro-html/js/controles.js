// Selectores

// 1. ID
// 2. etiqueta
// 3. clase
// 4. name

const titulo = document.getElementById('titulo')

titulo.innerText = 'Valor cambiado desde JS'
titulo.style.color = 'white'
titulo.style.background = '#242424'
titulo.style.padding = '24px'

const subtitulo = document.querySelectorAll('#subtitulo')

subtitulo[0].innerText = 'Referencia por medio de querySelectorAll'



// Manejo de eventos

const guardar = document.querySelector('#guardar')
const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')

//asignar un listener
// guardar.addEventListener('click', (event) => {

//     const data = {}

//     inputs.forEach(({ value, name }) => {
//         data[name] = value

//     })

//     console.log(data)

// })


form.addEventListener('submit', (event) => {

    event.preventDefault() // detenga el comportamiento por defecto

    const datosFormulario = new FormData(form)

    // const datos = {}

    // datosFormulario.entries().forEach(([key, value]) => {
    //     datos[key] = value
    // });

    const datos = Object.fromEntries(datosFormulario)

    console.log(datos)


})