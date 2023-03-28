//ejercicio 01: Area cuadrado

//inicio entrada de datos
// const ladoC = prompt("Ingrese la medida de un lado del cuadrado: ");
// proceso
// const areaC = ladoC*ladoC;
// salida
// console.log("El area del cuadrado es: ", areaC);

//ejercicio 02: Cobro estadia

//inicio entrada de datos
// const cobroxnoche = prompt("Ingrese el cobro por noche por una habitacion: ");
// const estadia = prompt("Ingrese N° de dias: ");
//proceso
// const cobroTotal = cobroxnoche * estadia;
//salida
// console.log("El monto total a pagar es: $", cobroTotal);

//ejercicio 03: Costo llamada

//inicio entrada de datos
//----------------------------------------------------------------------------------
//tiempo que dura la llamada
// const Dllamada = prompt ("Ingrese las horas usadas durante la llamada: ");
// const DllamadaMin = prompt("Ingrese los minutos usados durante la llamada: ");
//costo por minuto
// const cxmin = 0.2;
//proceso
//----------------------------------------------------------------------------------
// const Tmin = (Dllamada*60) + +DllamadaMin;
//costo de llamada
// const Cllamada = Tmin * cxmin;
//salida
//----------------------------------------------------------------------------------
// console.log("El costo de la llamada es: $.", Cllamada);
// console.log("minutos usados: ", Tmin);
// console.log("Costo por minuto:", cxmin);

//ejercicio 04: Promedio Examenes

//inicio entrada de datos
const exam1 = prompt("Ingrese nota del 1er examen: ");
const exam2 = prompt("Ingrese nota del 2er examen: ");
const exam3 = prompt("Ingrese nota del 3er examen: ");
//proceso
let n1 = exam1 * 0.25;
let n2 = exam2 * 0.25;
let n3 = exam3 * 0.5;

let prom = (n1 + n2 + n3);

//salida
console.log("Su promedio de examenes es: ", prom);