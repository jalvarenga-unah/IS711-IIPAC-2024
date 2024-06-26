


function suma(a, b) {

    return new Promise((resolve, reject) => {
        resolve(a + b)
    })

    //era el valor originar, pero se cambio por el valor de la promesa
    return a + b;
}

async function resta(a, b) {


    const resultado = await division(a, b)

    if (resultado === Infinity) return

    return new Promise((resolve, reject) => {

        const random = Math.random()

        if (random > 0.5)
            resolve(a - b)
        else
            reject('No se pudo realizar la resta')


    }
    )
}

const division = async (a, b) => {
    return a / b;
}

resta(5, 3).then(resultado => {
    console.log(resultado)
})


async function calcularCosas() {
    const resultadoSuma = await suma(2, 3);
    const resultadoResta = await resta(5, 3);

    return resultadoSuma + resultadoResta;

}

console.log(suma(2, 3)); // 5
console.log(resta(5, 3)); // 2