import { useState } from 'react';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const SECCIONES = ['Perfil', 'Suscripción', 'Pagos', 'Notificaciones', 'Privacidad'];

const MiCuenta = () => {
  const [seccion, setSeccion] = useState('Perfil');
  const [nombre, setNombre] = useState('Camila Fernández');
  const [usuario, setUsuario] = useState('@camifernandez');
  const [correo, setCorreo] = useState('cami@correo.com');

  const handleGuardar = (evento) => {
    evento.preventDefault();
  };

  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main">
        <h1 className="neon-heading" style={{ fontSize: 26, marginBottom: 32 }}>Mi cuenta</h1>

        <div className="neon-settings-layout">
          <nav className="neon-settings-nav">
            {SECCIONES.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSeccion(item)}
                className={`neon-settings-nav__item ${seccion === item ? 'neon-settings-nav__item--active' : ''}`}
              >
                {item}
              </button>
            ))}
            <button type="button" className="neon-settings-nav__item" style={{ color: '#FF7FCA' }}>Cerrar sesión</button>
          </nav>

          <div className="neon-settings-content">
            {seccion === 'Perfil' && (
              <form onSubmit={handleGuardar} className="neon-card" style={{ maxWidth: 'none', marginBottom: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
                  <span className="neon-avatar" style={{ width: 72, height: 72 }} />
                  <span className="neon-link">Cambiar foto</span>
                </div>
                <div className="neon-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input id="nombre" className="neon-input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div className="neon-field">
                  <label htmlFor="usuario">Usuario</label>
                  <input id="usuario" className="neon-input" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                </div>
                <div className="neon-field">
                  <label htmlFor="correo">Correo electrónico</label>
                  <input id="correo" className="neon-input" type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                </div>
                <button type="submit" className="neon-btn neon-btn--primary neon-btn--sm">Guardar cambios</button>
              </form>
            )}

            {seccion === 'Suscripción' && (
              <div className="neon-card" style={{ maxWidth: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
                <div>
                  <div style={{ color: '#F5EAF7', fontSize: 14, fontWeight: 600 }}>Plan Trimestral</div>
                  <div style={{ color: '#8E7E9C', fontSize: 12.5, marginTop: 4 }}>Próximo cobro: 12 de septiembre, 2026</div>
                </div>
                <button type="button" className="neon-btn neon-btn--outline neon-btn--sm">Cancelar suscripción</button>
              </div>
            )}

            {seccion !== 'Perfil' && seccion !== 'Suscripción' && (
              <p className="neon-subtext" style={{ textAlign: 'left' }}>Esta sección todavía no está implementada.</p>
            )}
          </div>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default MiCuenta;
