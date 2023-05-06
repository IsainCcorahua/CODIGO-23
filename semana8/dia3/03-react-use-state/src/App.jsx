import React from 'react';
import Contador from './components/contador'
import Aleatorios from './components/aleatorio';
import Frase from './components/frase';

const App = ()=> {
  return (
    <div>
      <Contador />
      <hr />
      <Aleatorios />
      <hr />
      <Frase/>
    </div>
  );
};

export default App
