/**
 * Tabla de multiplicar de un numero n
 * 1-12
 */

// const n = 7;
// for (let i = 1; i <= 12; i++) {
// 	console.log(n + ' x ' + i + ' = ' + n * i);
// }

/**
 * Ejercicio
 * Obtener la multiplicación de 2 números a*b
 * - No usar el símbolo de multiplicación *
 * - Usar sólamente sumas
 * - Usar el ciclo for obvi
 */
// console.log('---ejercicio de multiplicación');
// const n1 = 5;
// const n2 = 9;
// let suma = 0;

// for (let i = 1; i <= n1; i++) {
// 	suma = suma + n2;
// }

// console.log('resultado ' + suma);

/**
 * Un usuario ingresará 5 números; de todos ellos
 * se desean saber
 * - cantidad de nros positivos
 * - cantidad de nros negativos
 * - cantidad de nros iguales a cero
 */

// let pos = 0;
// let neg = 0;
// let cer = 0;
// let ingreso = undefined;
// for (let i = 0; i <= 4; i++) {
// 	ingreso = +prompt('Ingrese un número joven');
// 	if (ingreso > 0) {
// 		pos = pos + 1;
// 	} else if (ingreso === 0) {
// 		cer = cer + 1;
// 	} else {
// 		neg = neg + 1;
// 	}
// }
// console.log('Cantidad de positivos: ', pos);
// console.log('Cantidad de negativos: ', neg);
// console.log('Cantidad de ceros: ', cer);
//----------------------------------------------------------------------
// 
// let numero = parseInt(prompt('Ingrese parametro del numero: '))

// for(let i=0; i<=numero; i++){
//      if(i % 2 != 0){
//          document.write(i + ', ')
//     }
// }
//----------------------------------------------------------------------

// let tabla = parseInt(prompt('Ingrese el numero de la tabla que desee que se muestre: '));

// for(let i = 1; i <= 12; i++){
//     document.write(i + 'x' + tabla + '=' + (i*tabla) + '</br>');
// }

//----------------------------------------------------------------------
// let numero = parseInt(prompt('Ingrese un numero entero: '))

// for(let i = 0 ; i <= numero; i++){
//     if(i % 3 === 2){
//         console.log(i);
//     }
// }
//------------------------------------------------------------------------
// const sim = "*"
// let i;
// let e;
// let number = parseInt(prompt('Ingrese un numero: '))
// for (i = 0; i <= number - 1 ; i++){
//     for(e = 1; e <= i; e++){ 
//         document.write(sim)
//     }
//     document.write(sim + '</br>');
// }

//-------------------------------------------------------------------------
// let number = parseInt(prompt('Ingrese un numero: '));
// let suma =0;

// for(let i = 1; i <= number; i++){
//     suma = i + suma;
    
// }
// document.write(suma)
//-------------------------------------------------------------------------
// let suma = 0;
// let number 
// for(let i = 1 ; i<= 4; i++){
//     number = parseInt(prompt('Ingrese un numero: '));
//     suma = number + suma;
// }
// suma = suma/4

// document.write(suma);


/**
 * Un usuario ingresará 5 números; de todos ellos
 * se desean saber
 * - cantidad de nros positivos
 * - cantidad de nros negativos
 * - cantidad de nros iguales a cero
 */

// let post=0;
// let negt=0;
// let igu0=0;


// for(let i = 0; i <= 4; i++){
//     ingress = +prompt('Ingrese numero: ')
//     if(ingress > 0 ){
//         post = post + 1;
//     } else if(ingress < 0){
//         negt = negt + 1;
//     } else if( ingress == 0){
//         igu0 = igu0 + 1;
//     }
// }


// console.log('Numero de positivos: ', post);
// console.log('Numero de negativos: ', negt);
// console.log('Numero de ceros: ', igu0);
