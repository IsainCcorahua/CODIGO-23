/**
 * 
 */
// const nropersonas = 50;
// let total = 0;
// let costoPlato = 0;

// if (nropersonas > 200 && nropersonas <= 300) {
//     costoPlato = 85;
// }   else {
//     if (nropersonas > 300) {
//         costoPlato = 75;
//     } else {
//         costoPlato = 90;
//     }
// }


const nroAlumnos = 300;
const costoPasaje = 4000;
let CostoAlum = 0;
let totalP = 0;

if (nroAlumnos >= 100) {
    CostoAlum = 65;
}  else {
    if (nroAlumnos >=50 && nroAlumnos <=99) {
        CostoAlum = 70;
    } else {
        if (nroAlumnos >= 30 && nroAlumnos <=49) {
            CostoAlum = 95;
        } else {
            totalP = costoPasaje;
        }
    }
}
totalP=nroAlumnos * CostoAlum;
console.log('El monto a pagar por alumno es: ', CostoAlum);
console.log('El monto a pagar total: ', totalP)

// Ejercicio propuesto 3.9 
const planA=1200;
const planB=950;
let totalPagar=0;

const planElegido = prompt('¿Que plan desea? Escriba a (Plan A) ó b (Plan B)')
const alcohol = prompt('¿Toma alcohol?');
const lentes = confirm('¿Usted usa lentes?');
const enfermedad = confirm('¿Padece usted de alguna enfermedad?');
const edad = +prompt('¿Ingrese su edad?');
let precioBase = 0;

if (planElegido==='a'){
    precioBase = planA;
} else {
    precioBase = planB;
}
totalPagar = precioBase;

if (alcohol) {
    totalPagar = totalPagar + 0.1 * precioBase;
}
if (lentes) {
    totalPagar = totalPagar + 0.05 * precioBase;
}
if (enfermedad) {
    totalPagar = totalPagar + 0.05 * precioBase;
}
if (edad > 40) {
    totalPagar = totalPagar + 0.2 * precioBase;
} else {
    totalPagar = totalPagar + 0.1 * precioBase;
}

console.log('Su cuenta joven: '+ totalPagar + ' soles');
