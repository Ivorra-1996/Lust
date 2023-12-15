import React, { useState } from 'react';
import VerificacionDeEdad from './components/VerificacionDeEdad';
import IniciarSesion from './components/Loggin/IniciarSesion';

const App = () => {
  const [mostrarIniciarSesion, setMostrarIniciarSesion] = useState(false);

  const handleVerificarEdad = (esMayor) => {
    if (esMayor) {
      setMostrarIniciarSesion(true);
    } else {
      window.location.href = 'https://www.google.com'; // Redirección a Google
    }
  };

  return (
    <div>
      {!mostrarIniciarSesion && (
        <VerificacionDeEdad 
        onSoyMayorClick={() => handleVerificarEdad(true)} 
        onSoyMenorClick={() => handleVerificarEdad(false)}
        />
      )}
      {mostrarIniciarSesion && <IniciarSesion />}
    </div>
  );
};

export default App;
