const main = document.querySelector("#main")
let numero, penultimo = 0, ultimo = 1
for (let aux = 3; aux <= 100; aux++) {
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;

    const createP = document.createElement("p")
    const resultPrint = document.createTextNode(numero)
    createP.appendChild(resultPrint)
    main.appendChild(createP)
}