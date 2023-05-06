//Que es una funcion?
//Una funcion es un conjunto de soluciones para poder realizar

function nombreDeLaFuncion(){
    //una vez declarada la funcion todo el codigo que haga
    //dentro de esta solo va a ejecutarse cuando se llame la funcion

    console.log('Mi primera funcion');
    alert('Mi primera funcion')
}

//nombreDeLaFuncion()

const sumar=(numero1,numero2)=>{
    const suma = numero1 + numero2;
    console.log('resultado',suma);

}

sumar(100,20);


//tipos de funciones
//existen 3 tipos de funciones - declarativa - expresiva o anonima y arrow funcion o funcion flecha

//declarativa
//anteponemos la palabra funcion
function suma(a,b,c){
    return a+b+c
}
console.log(suma(10,10,10))

//funcion anonima o expresiva
let suma2 = function(a,b){
    return a+b
}
console.log(suma2(20,10))

//funcion arrow

const suma3 =(x,y)=>{
    return x+y
}
console.log(suma3(20,10))




//funcion saludar a los alumnos

const saludar =(nombre,apellido)=>{
    //return 'hola mi nombre es ' + nombre +'y mi apellido es ' + apellido;
    return `Hola mi nombre es ${nombre} y mi apellido es ${apellido}`
}

console.log(saludar("guillermo","sifuentes"))


//----------------------------------------

const mostrarNombre =()=>{
    let newnombre = document.getElementById('nombreUsuario');
    let title = document.getElementById('reemplazo');
    let mensaje = 'Tu te llamas '+ newnombre.value;

    title.textContent = mensaje;
}

//------------------------------------

const mostrarTexto=()=>{
    let nombreIng = document.getElementById('inputTexto');
    let cambio = document.getElementById('titulo');
    let nMensaje = nombreIng.value;

    cambio.textContent=nMensaje;
}


//--------------------------------------
const mtexto=()=>{
    let bad= document.getElementById('textoA');
    let NuevoText= document.getElementById('badbunny');
    let NuevMensaje= bad.value;

    NuevoText.textContent = 'Mi artista favorito es '+ NuevMensaje;
}

//-----------------------------------------

const comenzarAlarma=()=>{
    setTimeout(tiempoCumplido, 1000*3);
}

const tiempoCumplido=()=>{
    alert('Se acabo el tiempo')
}

//ejemplo dos

let tiempElement = document.getElementById('tiempoElegido');
let estado = document.getElementById('textoAlarma');

const tiempolimit =()=>{
    estado.textContent = 'Encendido';
    estado.style.color = 'green';
}

const comenzarTiempo =()=>{
    setTimeout(tiempolimit, 1000 * tiempElement.value)
}


function Disco(artista, albun, año){
    this.artista = artista;
    this.albun = albun;
    this.año = año;
}

let Disco2 = new Disco ('billie eiglish','www', 2012);

console.log('Artista: ' + Disco2.artista)
console.log('Albun: ' + Disco2.albun)
console.log('año: ' + Disco2.año)

// class Player{
//     constructor(nombre, colorSombrero){
//         this._nombre = nombre;
//         this._colorSombrero = colorSombrero;
//     }
//     saltar(){}
//     correr(){}
//     saludar(){
//         return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`; 
//     }
//     get nombre(){
//         return this._nombre
//     }
//     set cambiarNombre(nuevoNOmbre){
//         this._nombre = nuevoNOmbre; 
//     }
// }

// let player1 = new Player('Mario', 'Rojo');
// let player2 = new Player('Luigi', 'Verde');

// console.log(player1);
// console.log(player2);

// console.log(player1.saludar());


// class Pet extends Player{
//     constructor(nombre, colorSombrero, colorPiel){
//     super(nombre, colorSombrero);
//     this._colorPiel= colorPiel;
//     }
// }

// let pet1 = new Pet('Yoshi', 'Invisible', 'Verde');
// console.log(pet1);
// console.log(pet1.nombre)

// pet1.cambiarNombre = 'Rufus';
// console.log(pet1.nombre)

