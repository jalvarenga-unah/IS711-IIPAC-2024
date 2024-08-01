const express = require('express');

// Creación del app de express
const app = express() // instancia de express
app.disable('x-powered-by') // deshabilitar la cabecera x-powered-by

//establecer el puerto
const PORT = process.env.PORT || 3000


//RUTAS

app.get('/', (request, response) => {

    response.send('<h1>Mi primer API</h1>')

})

app.get('/saludo/:name', (req, res) => {


    // const nombre = req.params.name
    const { name } = req.params

    // res.send(`<h1>Hola ${name}</h1>`)
    //TODO: devoler codigo y encabezado correcto
    res.json({ message: `Hola ${name}` })

})




// lo poner en marcha
app.listen(PORT, () => {
    console.log(`El servidor se ejecuta en: http://localhost:${PORT}`)
})