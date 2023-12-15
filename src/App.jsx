import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import VerificacionDeEdad from './components/VerificacionDeEdad';

// Esto es un componente con nombre camelname que se puede usar hubs
const App = () => {
  // Estado...
  // Ciclo de vida -> como interactua con el tiempo, es decir, actualiza el estado tantos segundo...
  // JSX es como el HTML de mi aplicacion, no es HTML es JSX..

  return (
    <VerificacionDeEdad/>
  );
}

export default App
