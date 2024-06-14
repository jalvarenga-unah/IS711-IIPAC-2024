

const exec = {
    test: saludar
}

function saludar(nombre, apellido) {


    // console.log("Hola mundo");
    return `Hola ${nombre} ${apellido}`;

}

// let sumar = (a, b) => a + b
let sumar = function (a, b) {
    return a - b
}

const test = () => {
    console.log('Hola mundo');
}

const contenido = saludar('Alvarenga', 'Juan');

// saludar() = "Hola mundo2"; // ❌ No se puede reasignar

console.log(contenido);
console.log(saludar('Pedro'));
console.log(saludar(124));
console.log(exec['test']());

console.log(sumar(3, '2'));
