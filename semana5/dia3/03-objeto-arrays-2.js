// [].filter((elemento, index?, arreglo?)=>{})

const numeros = [1, 50, 2, 78, 9, 63, 6, 14, 15];
//Ejercicio para filtrar todos los números pares

const pares = numeros.filter((n) => {
  if (n % 2 === 0) {
    return n;
  }
});
console.log("pares", pares);

//forma directa de filtrar a los pares
const paresV2 = numeros.filter((n) => n % 2 === 0);
console.log("pares v2", paresV2);

//Ejercicios para filtrar un arreglo de usuarios

let users = [
  {
    id: 1,
    email: "george.bluth@gmail.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    age: 12,
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg",
    age: 50,
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://reqres.in/img/faces/3-image.jpg",
    age: 35,
  },
  {
    id: 4,
    email: "eve.holt@gmail.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://reqres.in/img/faces/4-image.jpg",
    age: 15,
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://reqres.in/img/faces/5-image.jpg",
    age: 17,
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://reqres.in/img/faces/6-image.jpg",
    age: 36,
  },
];

// const userEm = users.filter((user)=>users.email.includes("@gmail"));
// console.log("usuariosGmail", userEm);

//enfoque desestructurando el email directamente
//desventaja: Ya no tengo acceso a los demas campos de los usuarios

// const userEm2 = users.filter(({email}) => email.includes("@gmail"));
// console.log("usuariosGmailV2", userEm2);

// [].find((elemento,index?,arreglo?)=>{})

//Del arreglo de usuarios, encontrar al usuaro con id = 5

const userId5 = users.find((user) => user.id === 5);
console.log("userId5", userId5);

const userId5V2 = users.filter((user) => user.id === 5);
console.log("userId5V2", userId5V2);

//[].reduce((sumatoria, elementoActual)=> {return la sumatoria + el nuevo elemento})

// Ejercicio para obtener una suma de todos los numeros del arreglo numeros

const total = numeros.reduce((sumatoria, elementoActual) => {
  return sumatoria + elementoActual;
});

console.log("sumatoria total", total);

//[].splice(posición,cantidadElementosAEliminar,elementosAInsertar)

//Eliminar al user de la posición 4, y en su lugar, insertaremos un nuevo usuario
users.slice(4, 1, {
  age: 31,
  first_name: "Jorge",
  last_name: "Garnica",
  id: 100,
  email: "jorgegarba@gmail.com",
});
console.log("usuarios", users);


/////--------------------------------------------------------------------------------

const cantidad = prompt("Ingrese una cantidad");

alert("Tu cantidad " + cantidad);