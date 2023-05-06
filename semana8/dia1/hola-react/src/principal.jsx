import Articulo from "./articulo";

function Principal() {
  const articulo1 = {
    titulo: "Articulo 1",
    imagen: "https://placehold.co/300",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non sed molestiae iure ab consequatur nam laboriosam maxime, facilis accusantium tenetur cum",
  };
  const articulo2 = {
    titulo: "Articulo 2",
    imagen: "https://placehold.co/250",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non sed molestiae iure ab consequatur nam laboriosam maxime, facilis accusantium tenetur cum",
  };
  const articulo3 = {
    titulo: "Articulo 3",
    imagen: "https://placehold.co/250",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non sed molestiae iure ab consequatur nam laboriosam maxime, facilis accusantium tenetur cum",
  };
  const articulos = [articulo1, articulo2, articulo3]
  const resultado = articulos.map((art) =>{
    return <Articulo info={art}/>;
  })

  const elemento = [
    <Articulo info={articulo1} />,
    <Articulo info={articulo2} />,
  ];

  return (
    <div>
      <h2>Articulos detallados</h2>

        {resultado}

      <Articulo info={articulo1} />
      <Articulo info={articulo2} />
      <Articulo info={articulo3} />
      {elemento}
    </div>
  );
}
export default Principal;
