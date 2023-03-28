//Ejercicio 3.4
// El dueño de un estacionamiento requiere un diagrama de flujo con
// el algoritmo que le permita determinar cuánto debe cobrar por el
// uso del estacionamiento a sus clientes. Las tarifas que se tienen son
// las siguientes:

// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

// const nom1= 'fabian';
// const nom2= 'rosario';
// const nom3= 'carlos';
// const edad1= 20;
// const edad2= 19;
// const edad3= 24;

// if (edad1<edad2) {
//     if (edad1<edad3) {
//         console.log(nom1, 'es el menor con ', edad1, ' años de edad.');
//     } else {
//         console.log(nom3, 'es el menor con ', edad3, ' años de edad.');
//     }
// } else {
//     if (edad2<edad3) {
//         console.log(nom2, 'es la menor con ', edad2, ' años de edad.');
//     } else {
//         console.log(nom3, 'es el menos con ', edad3, ' años de edad.');
//     }
// } 

const edadM = 18;
const edadU = prompt('Ingrese su edad: ');

if (edadU >= 18) {
    console.log('Usted es mayor de edad.');
} else {
    console.log('Usted es menor de edad.');
}
