console.log(promedioDosNumeros(2, 4))

function promedioDosNumeros(num1, num2) {
    return (num1 + num2) /2;
}


const calcularEdad = (anioNacimiento) => {
    return 2023 - anioNacimiento;
};
console.log(calcularEdad(2000));

const calcularEdad2 = (anioNacimiento => 2023 - anioNacimiento);
//console.log(calcularEdad(2000));


const sumarNNumeros = (...numeros) => {
    let suma=0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
// console.log(sumarNNumeros(2,4));

const ternarios = (num1, num2) => {
    return num1 !== num2 ? "Son diferentes" : "Son iguales";
}
//console.log(ternarios(13, 27));

const ternarios2 = (num1, num2) => {
    return acepto ? "Acepto" : "No acepto";
};
console.log(ternarios2(true));

