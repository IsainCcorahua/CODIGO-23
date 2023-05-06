// js podemos y tambien escribir desde este documento

document.write("hola de nuevo");

//vamos a crear una lista usado js
//1. insertar una lista dentro del div #container-list
//2. insertar elementos dentro de mi lidta li

const containerList = document.querySelector("#container-list");

// Dentro de js existe una funcion llamada createElement la cua lnos permite crear elementos

const ul = document.createElement("ul");
ul.className = "lista";

const inputs = Array.from(document.querySelectorAll("input"));
inputs.map((input)=>{
    const li = document.createElement("li")
    const contenido= document.createTextNode(input.value);
    li.appendChild(contenido);
    ul.appenChild(li)
});

console.log(ul)
containerList.appendChild(ul)