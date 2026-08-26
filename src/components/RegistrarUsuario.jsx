import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonHeader from './neon/NeonHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const RegistrarUsuario = () => {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [esMayorDeEdad, setEsMayorDeEdad] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (contrasena !== confirmarContrasena) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    if (!esMayorDeEdad) {
      setError('Tenés que confirmar que sos mayor de 18 años.');
      return;
    }

    setError('');
  };

  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-main">
        <form className="neon-card" onSubmit={handleSubmit}>
          <h1 className="neon-card__title">Creá tu cuenta</h1>
          <p className="neon-card__subtitle">Sumate para acceder a contenido exclusivo.</p>

          <div className="neon-field">
            <label htmlFor="usuario">Nombre de usuario</label>
            <input
              id="usuario"
              className="neon-input"
              type="text"
              placeholder="tu_usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="neon-field">
            <label htmlFor="correo">Correo electrónico</label>
            <input
              id="correo"
              className="neon-input"
              type="email"
              placeholder="tu@correo.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>

          <div className="neon-field">
            <label htmlFor="contrasena">Contraseña</label>
            <input
              id="contrasena"
              className="neon-input"
              type="password"
              placeholder="••••••••"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <div className="neon-field">
            <label htmlFor="confirmarContrasena">Confirmar contraseña</label>
            <input
              id="confirmarContrasena"
              className="neon-input"
              type="password"
              placeholder="••••••••"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              required
            />
          </div>

          <label className="neon-checkbox-row">
            <input
              type="checkbox"
              checked={esMayorDeEdad}
              onChange={(e) => setEsMayorDeEdad(e.target.checked)}
            />
            <span>Confirmo que soy mayor de 18 años</span>
          </label>

          {error && <p className="neon-error">{error}</p>}

          <button type="submit" className="neon-btn neon-btn--primary">
            Crear cuenta
          </button>

          <p className="neon-form-note">
            ¿Ya tenés cuenta? <Link to="/login" className="neon-link">Iniciar sesión</Link>
          </p>
        </form>
      </main>

      <NeonFooter />
    </div>
  );
};

export default RegistrarUsuario;
