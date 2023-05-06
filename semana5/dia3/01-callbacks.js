//Funcion que obtiene un arreglo de posts y
//los devuelve a través del callback fn
//@param {*} fn(posts)
//posts es el arreglo de posts

const obtenerPosts= async (fn) => {
    const reponse = await fetch("https://jsonplaceholder.typicode.code.com/posts");
    const data = await Response.json();
    fn(data);
};

const miFuncion= (posts) => {
    console.log("posts", posts);
};
obtenerPosts(miFuncion);