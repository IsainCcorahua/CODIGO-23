
const miPromesa = new Promise((resolve, reject) => {
    setTimeout (()=> {
        const aleatorio = Math.round(Math.random() * (100 - 0) + 0);
                if (aleatorio % 2 === 0) {
                    resolve('exitoso!');
                } else {
                    reject('error 404');
                }
    
    }, 2000);

})

// Consumo de la promesa

miPromesa
    .then((data) => {
    console.log('data',data)
    })
    .catch((error) => {
    console.log('error',error)
    });
    


console.log('despedida');