//2.  Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
// const notas=4
// const suma=0;
// let nota


// while (condition) {
    
// }
// // for (let i = 1; i <= notas; i++) {
    
// //     nota = +prompt('Ingrese nota')
    

// // }
// prom=suma/4;

// console.log('Su promedio es: ',prom);
let arraynotas =[]

const registrarNota=()=>{
    let nota = +prompt ('Ingrese nota');
    arraynotas.push(nota);
    console.log(arraynotas);
}

const CalProm=()=>{
    let prom = (arraynotas[0] + arraynotas[1] + arraynotas[2] + arraynotas[3])/4;
    document.getElementById("Lnotas").textContent=prom;
}  

