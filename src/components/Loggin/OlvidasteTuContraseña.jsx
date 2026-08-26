import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonHeader from '../neon/NeonHeader';
import NeonFooter from '../neon/NeonFooter';
import '../../../css/neon-theme.css';

const OlvidasteTuContraseña = () => {
  const [correo, setCorreo] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-main">
        <div className="neon-card" style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'rgba(255,61,174,0.15)',
              border: '1px solid rgba(255,61,174,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 22px',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7FCA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </div>

          <h1 className="neon-card__title">Recuperar contraseña</h1>

          {enviado ? (
            <p className="neon-card__subtitle">
              Si <strong>{correo}</strong> está registrado, te enviamos un enlace para restablecer tu contraseña.
            </p>
          ) : (
            <>
              <p className="neon-card__subtitle">Te enviaremos un enlace para restablecerla.</p>
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="neon-btn neon-btn--primary">
                  Enviar enlace
                </button>
              </form>
            </>
          )}

          <p className="neon-form-note">
            Volver a <Link to="/login" className="neon-link">iniciar sesión</Link>
          </p>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default OlvidasteTuContraseña;
