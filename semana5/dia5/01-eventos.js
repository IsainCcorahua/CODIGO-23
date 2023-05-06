function imprimir(){
    console.log("hola desde js")
}


//.------------------------Crear la funcion de la calculadora

function calculadorHTML(operacion){
    //obtener los valores inputs
    const numero1=document.querySelector("#numero1").value;
    const numero2=document.querySelector ("#numero2").value;

    //validar que los otros datos o estan vacios

    if(numero1=== "" || numero2===""){
        alert("oye completa los campos")
        return
    }
    
    //una vez validado los campos debo hallar la operacion
    //necesito una variable que se encargue de guardar el resultado
    
    let resultado = 0;
    
    if(operacion === "+"){
        resultado = sumar(numero1 , numero2)
    }
    if(operacion === "-"){
        resultado = restar(numero1 , numero2)
    }
    if(operacion === "*"){
        resultado = multiplicar(numero1 , numero2)
    }
    if(operacion === "/"){
        resultado = dividir(numero1 , numero2)
    }

    //para acabar debo mostrar el resultado en mi html

    const p=document.createElement("p");
    const value = document.createTextNode(resultado);
    p.appendChild(value);

    const contenedor = document.querySelector("#resultado");
    contenedor.appendChild(p)


}
