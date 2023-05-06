const getUsers = async () => {
  const URL_USERS = "https://reqres.in/api/users";
  //el metodo HTTP por defecto es GET (en caso no se especifique)
  const response = await fetch(URL_USERS, { method: "GET", headers: {} });

  const data = await response.json();
  console.log("getUsers", data);
};

/** request con metodo GET, sin headers con query params
 */

const getNProducts = async () => {
  const URL = "https://fakestoreapi.com/products?limit=6&sort=desc";
  const response = await fetch(URL);
  const data = await response.json();
  console.log("getNProducts", data);
};

/* request con metodo POST, sin headers con body*/

const postCreateProduct = async () => {
  const URL = "https://fakestoreapi.com/products";
  const producto = {
    body: {
        title: "test product",
        price: 13.5,
        description: "https://i.pravatar.cc",
        category: "electronic"
  }
 }
  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(producto)
});

}
