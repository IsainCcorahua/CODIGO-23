import producto from "./producto";
import { productosData} from "./productos";


const productos = () => {
    const cards = productosData.map((prod) =>{
        return <producto prod={prop}/>;
    })
  return <div className="row">{cards}</div>
  
}

export default productos