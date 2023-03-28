// objetos
const persona= {
    nombre:"Yuli",
    dni:"12345678",
    telefono:"988355744",
    idiomas:["Español","Ingles","Francés"]
}

console.log("telefono", persona.telefono);
console.log("idiomas",persona.idiomas);

//-------Inyectando un nuevo idioma

persona.idiomas.push("aymara");

console.log("persona Actualizada", persona);

//------- modificando el telefono

persona.telefono = "99999999";
console.log("persona Actualizada", persona);

//Agregando nuevos atributos (No se recomienda agregar nuevos atributos a un objeto)

persona.direccion = {};
persona.direccion.calle = "lima" ;
persona.direccion.distrito = "Miraflores ";
persona.direccion.ciudad = "Arequipa";
//los objetos tienen llaves, que contienen 

console.log("persona Actualizada", persona);

// Agregando un atributo a la persona FORMA 2
persona.estudios = {
    primaria: "Escuela de los Andes",
    secundaria: "Colegio Nuestra Señora De Fatima",
    superior: "UNMSM"
};
