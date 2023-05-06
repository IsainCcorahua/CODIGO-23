//Existe dentro de js el document ... Este atributo JS me va a permitir 
//obtener elementos desde html

//obtener elementos en base a su etiqueta

//tag = etiqueta
//id = identificador
//class = clases

//como tengo 4 elementos con el tagname input esto sera un array de input
const inputs = document.getElementsByTagName("input");
console.log("esto son los inputs ", inputs);

//recordemos que input es un HTMLcolecction pero para poder iterarlos debe ser convertido a un arrays normal
//vamos a usar un Array.from va convertir el collection en un array

const newInputs = array.from(inputs);
console.log("inputs", inputs);
console.log("newInputs",newInputs);

//iteramos la variable inputs
//map
newInputs.map((newInput)=>{
    console.log("newInputs",newInput)
});

//capturando el form

const form = document.getElementsByClassName("formulario");
console.log("formulario", form);

//acceder al boton

const botton = document.getElementsByClassName("btn_registro");



const divContent=document.getElementsByTagName("div");
console.log("divcontent", divContent)
const newDivContent = Array.from(divContent);
console.log(newDivContent)
newDivContent.forEach((Element)=> {
    console.log(Element)
});


//-------------------------------------------------

const inputPassword = document.getElementById("input_password");
console.log(inputPassword);

//de que forma accedemos al value al elemento capturado?
inputPassword.style.backgroundColor="#f01";
console.log(inputPassword.value);

const inputLastname=document.getElementsByClassName("input_lastname")
inputLastname[0].style.color="red";

const input2 = document.querySelectorAll("input");
console.log("query", input2);