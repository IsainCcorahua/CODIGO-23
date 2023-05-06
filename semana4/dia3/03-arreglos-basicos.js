const nro=2;
const nombre='asd';
const casado=true;
const libros = ['HP1', 'HP2', 'HP3'];
console.log(libros);
console.log(libros[2]);

const notas = [7,5,3,13,6,12];
console.log('notas' + notas);
console.log('suma de la 1ra con la ultima', notas[0] + notas[5]);
//reasignacion de un elemento
notas[4] = 20;
console.log('notas nuevas', notas);

//propiedades
console.log('Cantidad de libros');
console.log(libros.length);

console.log('Cantidad de notas');
console.log(notas.length);

libros.push('aves sin nido');
console.log(libros);

//recorriendo un arreglo
let acumulador =0;
for (let i = 0; i < notas.length; i++) {
    acumulador = acumulador + notas[i];
}
console.log('acumulador', acumulador);

//ejercicio:
//¿Cuantos numeros del arreglo de notas son pares?
//¿Cuantos numeros del arreglo de notas son impares?

let pares=0;
let impares=0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        pares++;
    }else {
        impares++;
     }
}

 console.log('Total pares', pares);
 console.log('Total impares', impares);

//Ejercicio mejorado RETO
//al enunciado anterior, imprimir tambien,
//que numeros son pares y que numeros son impares
//OJO imprimir al final, no en cada iteración.

let pares1=0;
let impares1=0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] % 2 === 0) {
        npar=pares1;
        pares1++;
    }else {
        nimpar=impares1;
        impares1++;
     }
}

 console.log('Total pares', pares1);
 console.log('Numeros pares son: ', npar,', ');
 console.log('Total impares', impares1);
 console.log('Numeros impares son: ', nimpar,', ');

// let nombre = ['Juan', 'Carlos', 'Daniel'];

// for(let i = 0; i < nombre.length; i++){
//     console.log(nombre[i])
// }

// const objeto9 = [
//   {nombre: "Daniel",
//    edad: 18, 
//    comidaFavorita: "Arroz con pollo" 
// },
// {
//     nombre: 'Carlos',
//     edad: 28,
//     comidaFavorita: 'Pollo a la brasa',    
// },
// {
//     nombre: 'Carla',
//     edad: 23,
//     comidaFavorita: 'Guiso de Palta',
// },
// ];

// for(let i = 0; i < objeto9.length; i++){

//     console.log('=========================================')

//     console.log('Nombre: ' +objeto9[i].nombre)
//     console.log('Edad: ' +objeto9[i].edad)
//     console.log('Comida Favorita: ' +objeto9[i].comidaFavorita)
// }


// const arrayOb = {
//     nombre: 'Objeto con array',
//     arr: ['abeja', 'banana', 'camion', 'dado'],
// };

// arrayOb.arr.forEach((elemento)=>{
//     console.log(elemento)
// })

// objeto9.forEach((element)=>{
//     console.log(element)
// })

for(let i = 0; i < notas.length; i++){
    if(notas[i] % 2 == 0){

    }
}



const arrayobjetos = [
    {
        nombre: 'Manuel',
        apellidos: 'Sosa Contreras',
        edad: 18,
        dni: 52486295,
        profesion: 'Estudiante'
    },
    {
        nombre: 'Isaac',
        apellidos: 'Palacios Perez',
        edad: 23,
        dni: 23546523,
        profesion: 'Estudiante'
    }
];

for(let i = 0; i <= arrayobjetos.length - 1; i++){
    console.log("Nombre: " + arrayobjetos[i].nombre)
    console.log("Edad: " + arrayobjetos[i].edad)
    console.log("Profesión: " + arrayobjetos[i].profesion)
}



