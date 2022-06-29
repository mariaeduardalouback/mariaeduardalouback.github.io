
const numberOne = document.querySelector("#numOne")
const numberTwo = document.querySelector("#numTwo")
const update = document.querySelector("#confirm");
const divOne = document.querySelector("#one")
const one = () => {
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode((parseFloat(numberOne.value) + parseFloat(numberTwo.value)));
    createP.appendChild(resultPrint);
    divOne.appendChild(createP);
}

update.addEventListener("click", one)


const numberOne_two = document.querySelector("#numOne_Two")
const numberTwo_two = document.querySelector("#numTwo_Two")
const update_two = document.querySelector("#confirm_Two");
const divOne_two = document.querySelector("#two")
const two = () => {
    let maior;
    if(numberOne_two.value > numberTwo_two.value) {
        maior = numberOne_two.value;
    } else if(numberOne_two.value == numberTwo_two.value) {
        maior = "São iguais";
    }
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(maior);
    createP.appendChild(resultPrint);
    divOne_two.appendChild(createP);
}

update_two.addEventListener("click", two)


const numberOne_three = document.querySelector("#numOne_Three")
const update_three = document.querySelector("#confirm_Three");
const divThree = document.querySelector("#three")
const three = () => {
    let aux = 0;
    let primo;
    for (let index = 0; index <= numberOne_three.value; index++) {
        if(numberOne_three.value % index == 0) {
            aux++
        }
        if(aux == 2) {
            primo = "É primo"
        } else {
            primo = "Não é primo"
        }
    }
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(primo);
    createP.appendChild(resultPrint);
    divThree.appendChild(createP);
}

update_three.addEventListener("click", three)


const numberOne_four = document.querySelector("#numOne_Four")
const numberTwo_four = document.querySelector("#numTwo_Four")
const update_four = document.querySelector("#confirm_Four");
const divFour = document.querySelector("#four")
const four = () => {
    const hip = Math.sqrt(((numberOne_four.value**2) + (numberTwo_four.value**2)))
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(hip);
    createP.appendChild(resultPrint);
    divFour.appendChild(createP);
}

update_four.addEventListener("click", four)

const numberOne_five = document.querySelector("#numOne_Five")
const numberTwo_five = document.querySelector("#numTwo_Five")
const update_five = document.querySelector("#confirm_Five");
const divFive = document.querySelector("#five")
const five = () => {
    const salario = (numberTwo_five.value * numberOne_five.value) / 100
    const newSalario = parseFloat(salario) + parseFloat(numberOne_five.value);  
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(newSalario);
    createP.appendChild(resultPrint);
    divFive.appendChild(createP);
}

update_five.addEventListener("click", five)

const numberOne_six = document.querySelector("#numOne_Six")
const update_six = document.querySelector("#confirm_Six");
const divSix = document.querySelector("#six")
const six = () => {
    const converter = ((numberOne_six.value - 32) * (5/9))
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(converter);
    createP.appendChild(resultPrint);
    divSix.appendChild(createP);
}

update_six.addEventListener("click", six)

const numberOne_seven = document.querySelector("#numOne_Seven")
const numberTwo_seven = document.querySelector("#numTwo_Seven")
const numberThree_seven = document.querySelector("#numThree_Seven")
const update_seven = document.querySelector("#confirm_Seven");
const divSeven = document.querySelector("#seven")
const seven = () => {
    const mediaFinal = parseFloat(((numberOne_seven.value * 2) + (numberTwo_seven.value * 3) + (numberThree_seven.value * 5)) / 10) 
    const createP = document.createElement("p");
    const resultPrint = document.createTextNode(mediaFinal);
    createP.appendChild(resultPrint);
    divSeven.appendChild(createP);
}

update_seven.addEventListener("click", seven)