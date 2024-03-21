const form = document.getElementById("calculator-form");
const numeroUno = document.getElementById('num1');
const numeroDos = document.getElementById('num2');
const operacionX = document.getElementById('operation');
const resultado = document.getElementById('result');

const eventoForm = (event) => {
    event.preventDefault();
    var numm1 = parseFloat(numeroUno.value);
    var numm2 = parseFloat(numeroDos.value);
    var operaciones = operacionX.value;
    resultado.textContent = opeTDA(numm1, numm2, operaciones);
}
const opeTDA = (numero1, numero2, ope2) => {
    let resultado2;
    switch (ope2) {
        case 'nada':
            alert("Selecciona un tipo de operación")
            return
        case 'add':
            resultado2 = numero1 + numero2;
            break;
        case 'subtract':
            resultado2 = numero1 - numero2;
            break;
        case 'multiply':
            resultado2 = numero1 * numero2;
            break;
        case 'divide':
            if (numero2 !== 0) {
                resultado2 = numero1 / numero2;
            } else {
                resultado2 = 'erroneo';
            }
            break;
        default:
            resultado2 = 'Error: Operación no válida';
    }
    return "El resultado es: " + resultado2
}
form.addEventListener("submit", eventoForm)