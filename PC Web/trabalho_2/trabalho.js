document.querySelector('button').addEventListener('click', handleClick, false);

function handleClick() {
    var numero3 = document.querySelector('[data-js="numero3"]').value;
    var numero4 = document.querySelector('[data-js="numero4"]').value;

    document.querySelector('[data-js="result"]').innerHTML = "Resultado: " + maior(numero3, numero4);
}

document.querySelector('button').addEventListener('click', handleClick2, false);

function handleClick2() {
    var numero1 = document.querySelector('[data-js="numero1"]').value;
    var numero2 = document.querySelector('[data-js="numero2"]').value;

    document.querySelector('[data-js="result"]').innerHTML = "Resultado: " + sum(numero1, numero2);
}

function sum(numero1, numero2) {
    const soma = parseInt(numero1) + parseInt(numero2)

    console.log(soma)

    return soma;
}

function maior(numero1, numero2) {
    if (numero1 > numero2) {
        console.log()
        return numero1
    } else {
        return numero2
    }
}

// function sum(numero1, numero2) {
//     var DECIMAL = 10;
//     return parseInt(numero1, DECIMAL) + parseInt(numero2, DECIMAL);
// }
// function maior(numero1, numero2) {
//     var DECIMAL = 10;
//     return (numero1(numero1 > numero2)) ? 0: numero2;
// }
