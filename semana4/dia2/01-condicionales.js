const n1 = 81;
const n2 = 20;
const n3 = 80;

debugger;

if (n1>n2) {
    if (n1>n3) {
        console.log('El mayor es:', n1);
    } else
        console.log('El mayor es: ', n3);
} else {
    if (n2>n3) {
        console.log('El mayor es:', n2);
    } else {
        console.log('El mayor es: ', n3);
    }
}


const anio = 2023;

if ((anio % 4 === 0 && anio % 100 !==0) && anio % 400 === 0) {
    console.log(anio, 'es biciesto');
} else {
    console.log(anio, 'no es biciesto');
}
