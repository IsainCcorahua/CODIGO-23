//

const vehiculo = {
    marca:"Audi",
    modelo: "Q5",
    mantenimiento: [
        {
            fecha: "05/05/2023",
            kilometraje: "17000"
        },
        {
            fecha:"05/05/2023",
            kilometraje:"27000"
        }
    ],
    imprimirMarcaYModelo: function (){
        console.log("this", this);
        console.log("marca", this.marca);
        console.log("modelo", this.modelo);
    }
}

console.log("vehiculo", vehiculo);
vehiculo.imprimirMarcaYModelo();

//imprimir segundo mantenimento
console.log("segundo mantenimiento", vehiculo.mantenimiento[1]);

// no copiar los objetos de la siguiente manera
const vehiculo2= vehiculo2;
vehiculo2.modelo= "Q3";

console.log("vehiculo1", vehiculo);
console.log("vehiculo2", vehiculo2);

//funcion que crea objetos 
function creadorDeVehiculos(pMarca, pModelo, pAnio, pMantenimientos) {
    const VehiculoGenerico = {
        marca:pMarca,
        modelo: pModelo,
        anio:pAnio,
        mantenimientos: pMantenimientos
    };
    return VehiculoGenerico;
}

const MazdaCX3 = creadorDeVehiculos("Mazda", "CX3", 2023, [
    CreaMantenimiento("05/05/23", 15000, true),
    CreaMantenimiento("05/05/23", 15000, true)
]);
const bmwx4 = creadorDeVehiculos("BMW", "X4", 2024, []);
const mercedesGLA450 = creadorDeVehiculos();


console.log("Mazda", MazdaCX3);
console.log("bmw", bmwx4);

//funcion creador de mantenimiento

function CreaMantenimiento(fecha = " ", kilometraje=0, aceite=false){
    return {
        fecha: " ",
        kilometraje: 0,
        aceite: false
    }
}
