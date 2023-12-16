import React, { useState } from 'react';
import VerificacionDeEdad from './components/VerificacionDeEdad';
import IniciarSesion from './components/Loggin/IniciarSesion';
import '../css/HeaderYFooter.css';

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
      <div>
        <div className="pink-bar-header"></div>
      </div>
      <div>
        <div className="pink-bar-footer">© Lust.com, 2023</div>
      </div>
      <div>
      {!mostrarIniciarSesion && (
        <VerificacionDeEdad 
        onSoyMayorClick={() => handleVerificarEdad(true)} 
        onSoyMenorClick={() => handleVerificarEdad(false)}
        />
      )}
      {mostrarIniciarSesion && <IniciarSesion />}
      </div>
    
    </div>
  );
};

export default App;
