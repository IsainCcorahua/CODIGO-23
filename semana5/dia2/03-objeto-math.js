// La clase Math sirve para manipular numeros y
// funciones matemáticas


//Math.sqrt(número)
//retorna la raíz cuadrada del parámetro número


console.log("raiz de 49", Math.sqrt(49));

//Math.pow(base,potencia)
//retorna un número "base" elevado a la "potencia"

console.log("raiz cubica de 27", Math.pow(27, 1/3));

//math.round(número)
//retorna el redondeo de un número

console.log("redondeo de 9.86", Math.round(9.86));

//Math.floor(número)
//retorna el piso de un número
//ejm: el piso de 9.99 es 9

console.log("piso de 9.99", Math.floor(9.99));


//Math.ceil(número)
//retorna el techo de un número
//ejm: el techo de 10.01 es 11

console.log("Techo de 10.01", Math.ceil(10.01));

//Math.random()
//retorna un número random entre 0 y 1

console.log("random entre 0 y 1", Math.random());

//Artificio para generar un número random entre min y max
//Math.random() * (max-min) * min;

console.log("Random entre 50 y 850", Math.random()*(850-50) +50);

const random = (min, max) => Math.random() * (max - min) + min;

console.log(random(20, 90).toFixed(2));