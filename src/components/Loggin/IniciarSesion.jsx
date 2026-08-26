import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NeonHeader from '../neon/NeonHeader';
import NeonFooter from '../neon/NeonFooter';
import '../../../css/neon-theme.css';

const USUARIO_DE_PRUEBA = { correo: 'demo@lust.com', contrasena: 'lust1234' };

const IniciarSesion = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();

    if (correo === USUARIO_DE_PRUEBA.correo && contrasena === USUARIO_DE_PRUEBA.contrasena) {
      navigate('/home');
      return;
    }

    setError('Correo o contraseña incorrectos.');
  };

  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-main">
        <form className="neon-card" onSubmit={handleSubmit}>
          <h1 className="neon-card__title">¡Bienvenid@ de nuevo!</h1>
          <p className="neon-card__subtitle">Prepará todo, hay contenido nuevo esperándote.</p>
          <p className="neon-hint" style={{ textAlign: 'center', marginBottom: 24 }}>
            Usuario de prueba: {USUARIO_DE_PRUEBA.correo} / {USUARIO_DE_PRUEBA.contrasena}
          </p>

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

          <p className="neon-form-note neon-form-note--right">
            <Link to="/recuperar-contrasena" className="neon-link">¿Olvidaste tu contraseña?</Link>
          </p>

          {error && <p className="neon-error">{error}</p>}

          <button type="submit" className="neon-btn neon-btn--primary">
            Iniciar sesión
          </button>

          <p className="neon-form-note">
            ¿No tenés cuenta? <Link to="/registro" className="neon-link">Crear cuenta</Link>
          </p>
        </form>
      </main>

      <NeonFooter />
    </div>
  );
};

export default IniciarSesion;
