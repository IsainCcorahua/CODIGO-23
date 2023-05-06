//Propiedades de los strings

let frase= "Los programadores crean lo que las personas sueñan."













//toUpperCase()
//retorna un string en mayúsculas
console.log("toUpperCase", frase.toUpperCase());


//trim()

//retorna el strig sin espacios en blanco a los extremos
// en caso el string tubiera dichos espacios

console.log("trim","    Hola    mundo   ".trim());

// ? >>>>> parametro opcional
// substr(comienzo, extension?)
//Devuelve una subcadena desde la posición "comienzo"
//incluyendo "extensión" caracteres en adelante
//Si no se manda la extensión, el retorno será desde
//la posición "comienzo" hasta el final

console.log("frase desde la posición 9 por 4 caracteres");
console.log(frase.substr(9, 4));

//? prametro opcional
// substring(comienzo, final)
//Devuelve una subcadena desde la posición "comienzo"
//hasta la posición "final"

console.log("frase desde la posicion 9 hasta la posicion 13");
console.log(frase.substring(9, 13));

//startsWith(texto)
//devuelve true si el string inicia con el parámetro
//"texto"
console.log(frase.startsWith("Los pro"));

// endsWith(texto)
//devulve true si el string finaliza con el parámetro
//"texto"

console.log(frase.endsWith("sueñan"));

// includes(texto, posicion?)
//devuelve true si el string contiene el parámetro "texto"
// desde la posición "posición", si éste último parámetro no
// se ha establecido, el texto es buscado desde el inicio de la
//cadena

console.log(frase.includes("crean"));

// index(texto,posición?)
// retorna la posición en la que inicia el texto "texto"
//dentro de lstring a partir de la posición "posición".
//Si éste último parámetro no se ha establecido, la
//búsqueda se realiza desde el inicio de la cadena

console.log(frase.indexOf("crean"));