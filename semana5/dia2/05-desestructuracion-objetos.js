const producto = {
    nombre: "iPhone 14 pro",
    precio: 5500,
    codigo: 5,
    stock: 80,
    colores: ["negro", "azul", "rojo"]
};

//Una forma correcta de copiar o clonar 
//Un objeto sería la siguiente

const producto2 = {...producto};

//destructurando atributos

const { codigo, precio, ...rest} = producto;
console.log("codigo", codigo);
console.log("precio", precio);
console.log("rest", rest);


//desestructurando atributos con nuevos nombres
//de variables
