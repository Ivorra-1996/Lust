import { Routes, Route } from 'react-router-dom';
import VerificacionDeEdad from './components/VerificacionDeEdad';
import IniciarSesion from './components/Loggin/IniciarSesion';
import RegistrarUsuario from './components/RegistrarUsuario';
import OlvidasteTuContraseña from './components/Loggin/OlvidasteTuContraseña';
import Home from './components/Home';
import Explorar from './components/Explorar';
import Perfil from './components/Perfil';
import Ficha from './components/Ficha';
import Suscripcion from './components/Suscripcion';
import Mensajes from './components/Mensajes';
import MiCuenta from './components/MiCuenta';
import Notificaciones from './components/Notificaciones';
import Legal from './components/Legal';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<VerificacionDeEdad />} />
      <Route path="/login" element={<IniciarSesion />} />
      <Route path="/registro" element={<RegistrarUsuario />} />
      <Route path="/recuperar-contrasena" element={<OlvidasteTuContraseña />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explorar" element={<Explorar />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/contenido" element={<Ficha />} />
      <Route path="/suscripcion" element={<Suscripcion />} />
      <Route path="/mensajes" element={<Mensajes />} />
      <Route path="/mi-cuenta" element={<MiCuenta />} />
      <Route path="/notificaciones" element={<Notificaciones />} />
      <Route path="/terminos" element={<Legal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
