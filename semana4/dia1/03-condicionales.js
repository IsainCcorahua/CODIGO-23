//Estructuras condicionales
// const edad=18;
// if (edad >= 18){
//     console.log('Ya es mayor de edad.');
// } else {
//     console.log('Aun es menor de edad.')
// }

//Hacer un algoritmo para aplicar un descuento
// del 15% de la compra total si y solo si 
// el dia de la semana martes.
// en caso contrario, no aplicar ningun descuento

// OJO: no usar sentencia else

const Dia = 'martes';
const compra = 300;
if (Dia === 'martes'){
    total = compra - (compra * 0.15)
}
    console.log('Total a compra $', compra + ' total a pagar por descuento: $', total);

//Modificar el anterior ejercicio, para que el descuento,
//se realice si y solo si, es dia "martes" y el valor de la compra
//excede los 1000 soles

if (Dia ==='martes') {
    if (totalComprado > 1000){
        resultado = totalComprado - totalComprado * 0.15;
    } else {
        console.log('Es martes pero no No califica por compras menores a $1000')
    }
} else {
    console.log('No califica por no ser martes')
}

console.log('Total a pagar', resultado);
console.log(new Date().toDateString())