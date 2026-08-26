import { Link } from 'react-router-dom';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const IconPlay = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="rgba(255,255,255,0.85)" style={{ position: 'absolute', bottom: 10, right: 10 }}>
    <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.4)" />
    <path d="M10 8l6 4-6 4z" fill="#F5EAF7" />
  </svg>
);

const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5EAF7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconHeart = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

const CONTENIDO = [
  { creadora: '@creator_042', tipo: 'Video · 12:04', gradiente: 'linear-gradient(135deg,#FF3DAE,#7C1F63)', bloqueado: false, badge: 'NUEVO' },
  { creadora: '@creator_118', tipo: 'Fotos · 24 imágenes', gradiente: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)', bloqueado: true },
  { creadora: '@creator_263', tipo: '1.2k viendo ahora', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)', bloqueado: false, badge: 'EN VIVO' },
  { creadora: '@creator_509', tipo: 'Video · 08:42', gradiente: 'linear-gradient(135deg,#FF3DAE,#241046)', bloqueado: true },
  { creadora: '@creator_734', tipo: 'Video · 05:17', gradiente: 'linear-gradient(135deg,#8B5CF6,#FF6EC4)', bloqueado: false },
  { creadora: '@creator_881', tipo: 'Fotos · 16 imágenes', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)', bloqueado: true },
];

const CREADORAS = [
  { nombre: '@creator_042', gradiente: 'linear-gradient(135deg,#FF3DAE,#8B5CF6)' },
  { nombre: '@creator_118', gradiente: 'linear-gradient(135deg,#8B5CF6,#FF6EC4)' },
  { nombre: '@creator_263', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)' },
  { nombre: '@creator_509', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)' },
  { nombre: '@creator_734', gradiente: 'linear-gradient(135deg,#FF3DAE,#FF6EC4)' },
  { nombre: '@creator_881', gradiente: 'linear-gradient(135deg,#8B5CF6,#4A1E8C)' },
];

const Home = () => {
  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main">
        <div className="neon-hero-banner">
          <div className="neon-hero-banner__content">
            <div className="neon-eyebrow" style={{ marginBottom: 16 }}>DESTACADO DE LA SEMANA</div>
            <h1 className="neon-heading" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)' }}>
              Nueva colección exclusiva de @creator_042 ya disponible
            </h1>
            <Link to="/contenido" className="neon-btn neon-btn--primary neon-btn--sm">Ver ahora</Link>
          </div>
        </div>

        <div className="neon-chip-row">
          <span className="neon-chip neon-chip--active">Todos</span>
          <span className="neon-chip">Fotos</span>
          <span className="neon-chip">Videos</span>
          <span className="neon-chip">En vivo</span>
          <span className="neon-chip">Nuevos</span>
          <span className="neon-chip">Populares</span>
        </div>

        <h2 className="neon-section-title">Para vos</h2>
        <div className="neon-grid">
          {CONTENIDO.map((item) => (
            <Link to="/contenido" className="neon-content-card" key={item.creadora} style={{ textDecoration: 'none' }}>
              {item.bloqueado ? (
                <>
                  <div className="neon-content-thumb neon-content-thumb--locked" style={{ background: item.gradiente }} />
                  <div className="neon-lock-overlay">
                    <IconLock />
                    <span>Contenido premium</span>
                  </div>
                </>
              ) : (
                <div className="neon-content-thumb" style={{ background: item.gradiente }}>
                  {item.badge && (
                    <span
                    className={`neon-badge ${
                      item.badge === 'EN VIVO' ? 'neon-badge--live' : item.badge === 'NUEVO' ? 'neon-badge--new' : ''
                    }`}
                  >
                    {item.badge}
                  </span>
                  )}
                  <IconPlay />
                </div>
              )}
              <div className="neon-content-card__meta">
                <span className="neon-avatar" style={{ background: item.gradiente }} />
                <div style={{ flex: 1 }}>
                  <strong>{item.creadora}</strong>
                  <small>{item.tipo}</small>
                </div>
                <IconHeart />
              </div>
            </Link>
          ))}
        </div>

        <h2 className="neon-section-title">Creadoras destacadas</h2>
        <div className="neon-creators-row">
          {CREADORAS.map((creadora) => (
            <Link to="/perfil" className="neon-creator" key={creadora.nombre}>
              <span className="neon-avatar" style={{ background: creadora.gradiente }} />
              <span>{creadora.nombre}</span>
            </Link>
          ))}
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Home;
