const numero1= 50;
const numero2= 30;
let resultado = 0;
let resta=0;

resultado= numero1 + numero2;
resta= numero1 - numero2;

console.log('El resultado de la suma es: '+ resultado);
console.log('El resultado de la resta es: '+ resta);
console.log(numero1);
console.log('guillermo');

const valor1 = prompt('ingrese el valor 1');
const valor2 = prompt('Ingrese el valor 2');

const operacion = prompt('Ingrese una operacion +, -, *, /.')
let resultadoCalculadora = 0;

if (operacion === '+') {
    resultadoCalculadora = +valor1 + +valor2;
    console.log('resultado', resultadoCalculadora);
} else if (operacion === '-') {
    resultadoCalculadora = +valor1 - +valor2;
    console.log('resultado', resultadoCalculadora);
}
