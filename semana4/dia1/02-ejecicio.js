//ejercicio 1

// const n1 = 15;
// const n2 = 10;
// const n3 = 20;
// const n4 = 16;

// let promedio = (n1 + n2 + n3 + n4)/4


// console.log("Su promedio es: ", promedio);

//ejercicio 2
// let horasTrab = prompt("Ingrese horas trabajadas: ") 
// const cobroxhora = 3;

// let cobroTotal = horasTrab * cobroxhora;

// console.log("Su pago es: ", cobroTotal);

//ejercicio 3 

let sueldo = prompt("Ingrese su sueldo: ");
const ahorromes = sueldo * 0.15;

let ahorroAnio = ahorromes * 12;

console.log("Su ahorro anual seria: ", ahorroAnio);

let dia = prompt("Ingrese el dia de semana");
let compra = prompt("Ingrese el valor de la compra");

let totalPago = 0;


if (dia === "martes" && compra > 1000){
    totalPago = compra -(compra*0.15)
} else {
    totalPago = compra;

}

document.write("Total a pagar: ",totalPago)