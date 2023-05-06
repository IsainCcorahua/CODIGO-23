import Cabecera from "./cabecera"
import Aside from "./aside"
import Principal from "./principal"

import 'bootstrap/dist/css/bootstrap.min.css';
import './estilos.css';


function App() {
  return (
    <div>
     <Cabecera/>
     <Aside/>
     <Principal/>
    </div>
  )
}

export default App
