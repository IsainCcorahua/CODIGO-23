//Esto en particular retorna un Nodelist y este es compatible con foreach

const inputs= document.querySelectorAll("input");
console.log(inputs);

//












//este bucle se da por que podemos convertirlo en array
const arraConvertido= Array.from(inputs);
console.log(arraConvertido)

const arrayfilter = arraConvertido.filter(
    (input)=> input.type =="text"
);
console.log("arrayfilter",arrayfilter);