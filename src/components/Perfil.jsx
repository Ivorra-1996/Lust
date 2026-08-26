import { Link } from 'react-router-dom';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const IconLock = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5EAF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconPlay = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" style={{ position: 'absolute', bottom: 10, right: 10 }}>
    <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.4)" />
    <path d="M10 8l6 4-6 4z" fill="#F5EAF7" />
  </svg>
);

const PUBLICACIONES = [
  { tipo: 'Video · 09:12', gradiente: 'linear-gradient(135deg,#FF3DAE,#7C1F63)', bloqueado: false },
  { tipo: 'Premium · 18 fotos', gradiente: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)', bloqueado: true },
  { tipo: 'Premium · Video 14:20', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)', bloqueado: true },
  { tipo: 'Foto', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)', bloqueado: false },
  { tipo: 'Premium · 9 fotos', gradiente: 'linear-gradient(135deg,#7C1F63,#8B5CF6)', bloqueado: true },
  { tipo: 'Video · 04:55', gradiente: 'linear-gradient(135deg,#FF3DAE,#4A1E8C)', bloqueado: false },
];

const Perfil = () => {
  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main">
        <div className="neon-profile-cover" />
        <div className="neon-profile-header">
          <span className="neon-avatar neon-profile-avatar" style={{ background: 'linear-gradient(135deg,#FF3DAE,#8B5CF6)' }} />
          <div style={{ flex: 1, minWidth: 200 }}>
            <h1 style={{ color: '#F5EAF7', fontFamily: 'var(--neon-font-display)', fontWeight: 700, fontSize: 24, margin: 0 }}>@creator_042</h1>
            <div className="neon-profile-stats">
              <span><b>248</b> publicaciones</span>
              <span><b>18.4k</b> seguidores</span>
              <span><b>92k</b> me gusta</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to="/mensajes" className="neon-btn neon-btn--sm" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.18)', color: '#C9B7D6' }}>Mensaje</Link>
            <Link to="/suscripcion" className="neon-btn neon-btn--primary neon-btn--sm">Suscribirme — $9.99/mes</Link>
          </div>
        </div>

        <p className="neon-subtext" style={{ textAlign: 'left', maxWidth: 640, marginTop: 22 }}>
          Modelo &amp; creadora de contenido. Nuevas fotos y videos cada semana. Contenido exclusivo para suscriptores premium.
        </p>

        <div className="neon-tabs">
          <span className="neon-tab neon-tab--active">Publicaciones</span>
          <span className="neon-tab">Fotos</span>
          <span className="neon-tab">Videos</span>
          <span className="neon-tab">Acerca de</span>
        </div>

        <div className="neon-grid">
          {PUBLICACIONES.map((item, indice) => (
            <Link to="/contenido" key={indice} className="neon-content-card" style={{ textDecoration: 'none' }}>
              {item.bloqueado ? (
                <>
                  <div className="neon-content-thumb neon-content-thumb--locked" style={{ background: item.gradiente }} />
                  <div className="neon-lock-overlay"><IconLock /></div>
                </>
              ) : (
                <div className="neon-content-thumb" style={{ background: item.gradiente }}>
                  <IconPlay />
                </div>
              )}
              <div style={{ padding: '12px 14px', color: '#8E7E9C', fontSize: 11 }}>{item.tipo}</div>
            </Link>
          ))}
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Perfil;
