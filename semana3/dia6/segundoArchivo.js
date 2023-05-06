const numero1 = prompt("Ingrese el primer numero: ");
const numero2 = prompt("Ingrese el segundo numero:");

const operacion = prompt("Ingrese la operacion a realizar: +, -, *, /")

let resultado = 0;

if (operacion == "+"){
    resultado = numero1+numero2;

} else if (operacion == "-"){
    resultado = numero1-numero2;
} else if (operacion == "*"){
    resultado = numero1 * numero2;
} else if (operacion == "/") {
    resultado = numero1 / numero2
} else {
    alert("Operacion no especificada, vuelva a ingresar una operacion correcta.")
}

document.write(resultado);
