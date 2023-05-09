import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    
  }

  return (
    <div className="App">
      <Banner />
      <Form aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
    </div>
  );
}

export default App