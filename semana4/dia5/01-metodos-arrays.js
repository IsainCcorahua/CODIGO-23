const alumnos = ["Juan", "Pedro", "Maria", "Jose", "Luis"];

//forEach   
alumnos.forEach((alumno, index)  => { 
    // console.log(index, alumno)
    

//map
const nuevosAlumnos = alumnos.map((alumno, index) =>{
    return `${alumno} ${index}`;
})
// console.log(nuevosAlumnos);

//filter
const alumnosSinMaria = alumnos.filter((alumno, index)=>{
    return alumno !== "Maria";
});
// console.log(alumnosSinMaria)

//find
const alumnoEncontrado = alumnos.find((alumno, index) => {
    return alumno !== "Maria"
})
console.log(alumnoEncontrado);

//find Index
const indexAlumno = alumnos.findIndex((alumno) => {
    return alumno === "Jose";
});
//console.log(indexAlumno);
//3

//some


const existeAlumno = alumnos.some((alumno) =>{
    return alumno === "Maria"
});


//ejercicio de tarea resuelto
const focos = ["verde", "rojo", "blanco", "blanco"];

const contarFocos = ()=> {
    for (let index=0; index < focos.length; index++){
        if (focos[index] === "blanco") {
            focosBlancos++;
        }
        if (focos[index] === "verde") {
            focosVerdes++;
        }
        if (focos[index] === "rojo") {
            focosRojos++;
        }
    }

    return {
        focosBlancos: focosBlancos,
        focosVerdes: focosVerdes,
        focosRojos: focosRojos,
    };
}
console.log(contarFocos());