const categorias = [
    { id: 1, name: 'terror' },
    { id: 2, name: 'comedia' },
    { id: 3, name: 'accion' }
];

const peliculas = [
    {
        categoria: 'comedia',
        titutlo: 'El tonto y el más tonto'
    },
    {
        categoria: 'comedia',
        titutlo: 'La máscara'
    },
    {
        categoria: 'terror',
        titutlo: 'La monja'
    },
    {
        categoria: 'terror',
        titutlo: 'Actividad Paranormal'
    },
    {
        categoria: 'accion',
        titutlo: 'Terminator I'
    },
    {
        categoria: 'accion',
        titutlo: 'Rápidos y Curiosos'
    }
];

const getCategoriaById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const categoriaEncontrada = categorias.find((c) => c.id === id);
            if (categoriaEncontrada) {
                resolve(categoriaEncontrada.name);
            } else {
                reject('nay');
            }
        }, 2000);
    });
};
const getPeliculasByCategoria = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pelis = peliculas
                .filter((p) => name === p.categoria)
                .map((p) => p.titutlo);
            resolve(pelis);
        }, 2000);
    });
};

//forma 3, en una funcion async usando await

const caller = async () =>{
    const nombreCat = await getCategoriaById(1);
    const pelis = getPeliculasByCategoria(nombreCat);
    console.log('final', pelis);

}
caller();
