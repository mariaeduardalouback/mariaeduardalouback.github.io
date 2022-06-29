const input = document.querySelector("#num")
const update = document.querySelector("#confirm")
const main = document.querySelector("#main")
const calcFactorial = () => {
    let result = 1
    for (let aux = 1; aux <= 1000; aux++) {
        if (aux % 2 == 0) {
            result += aux;
        }
    }
    const createP = document.createElement("p")
    const resultPrint = document.createTextNode(result)
    createP.appendChild(resultPrint)
    main.appendChild(createP)
}

update.addEventListener("click", calcFactorial)