// Selectores

// 1. ID
// 2. etiqueta
// 3. clase
// 4. name

const titulo = document.
    getElementById('titulo')

titulo.innerText = 'Valor cambiado desde JS'
titulo.style.color = 'white'
titulo.style.background = '#242424'
titulo.style.padding = '24px'

const subtitulo = document.querySelectorAll('#subtitulo')

subtitulo[0].innerText = 'Referencia por medio de querySelectorAll'
