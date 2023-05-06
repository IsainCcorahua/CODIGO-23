console.log(1)
console.log(2)
function obtenerDatos (dni, callback){
    setTimeout(()=>{
        callback('Jorge Garnica');
    }, 1000);
    
}
obtenerDatos ('10101010', (nombre) => {
    console.log(nombre);
});

console.log(5)
console.log(6)