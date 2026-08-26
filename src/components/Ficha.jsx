import { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import NeonReportModal from './neon/NeonReportModal';
import '../../css/neon-theme.css';

const IconLock = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#F5EAF7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const IconHeart = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2">
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  </svg>
);

const IconEye = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const RECOMENDADOS = [
  { creadora: '@creator_263', tipo: 'Video', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)' },
  { creadora: '@creator_509', tipo: 'Premium', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)' },
  { creadora: '@creator_734', tipo: 'Foto', gradiente: 'linear-gradient(135deg,#FF3DAE,#7C1F63)' },
  { creadora: '@creator_881', tipo: 'Premium', gradiente: 'linear-gradient(135deg,#8B5CF6,#FF6EC4)' },
];

const Ficha = () => {
  const [mostrarReporte, setMostrarReporte] = useState(false);

  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main">
        <div className="neon-content-layout">
          <div className="neon-content-layout__main">
            <div className="neon-player" style={{ background: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)' }}>
              <IconLock />
              <span style={{ color: '#F5EAF7', fontFamily: 'var(--neon-font-display)', fontWeight: 600, fontSize: 18 }}>Contenido premium</span>
              <Link to="/suscripcion" className="neon-btn neon-btn--primary neon-btn--sm">Suscribite para desbloquear</Link>
            </div>

            <h1 style={{ color: '#F5EAF7', fontFamily: 'var(--neon-font-display)', fontWeight: 700, fontSize: 22, marginTop: 24 }}>
              Sesión de fotos — Atardecer
            </h1>
            <div className="neon-meta-row">
              <span><IconHeart /> 3.2k</span>
              <span><IconEye /> 18.4k</span>
              <span style={{ color: '#8E7E9C' }}>Publicado hace 2 días</span>
            </div>
            <p className="neon-subtext" style={{ textAlign: 'left', marginTop: 18, marginBottom: 0 }}>
              Set exclusivo grabado durante el atardecer. Incluye 24 fotos en alta resolución solo para suscriptores premium.
            </p>
            <div className="neon-tag-row">
              <span className="neon-tag">Glamour</span>
              <span className="neon-tag">Exterior</span>
              <span className="neon-tag">Fotos</span>
            </div>

            <button
              type="button"
              onClick={() => setMostrarReporte(true)}
              className="neon-link"
              style={{ marginTop: 24 }}
            >
              Reportar contenido
            </button>
          </div>

          <div className="neon-content-layout__side">
            <div className="neon-card" style={{ maxWidth: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span className="neon-avatar" style={{ width: 52, height: 52, background: 'linear-gradient(135deg,#FF3DAE,#8B5CF6)' }} />
                <div>
                  <div style={{ color: '#F5EAF7', fontSize: 15, fontWeight: 600 }}>@creator_042</div>
                  <div style={{ color: '#8E7E9C', fontSize: 12 }}>18.4k seguidores</div>
                </div>
              </div>
              <Link to="/suscripcion" className="neon-btn neon-btn--primary neon-btn--sm" style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>
                Suscribirme — $9.99/mes
              </Link>
            </div>
          </div>
        </div>

        <h2 className="neon-section-title">Comentarios</h2>
        <div style={{ maxWidth: 760, marginBottom: 44 }}>
          <div className="neon-comment">
            <span className="neon-avatar" style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#8B5CF6,#FF6EC4)' }} />
            <div>
              <strong>@user_215 <small>· hace 1 día</small></strong>
              <p>Increíble como siempre.</p>
            </div>
          </div>
          <div className="neon-comment">
            <span className="neon-avatar" style={{ width: 36, height: 36, background: 'linear-gradient(135deg,#FF3DAE,#4A1E8C)' }} />
            <div>
              <strong>@user_774 <small>· hace 2 días</small></strong>
              <p>Vale la pena cada centavo de la suscripción.</p>
            </div>
          </div>
        </div>

        <h2 className="neon-section-title">También te puede gustar</h2>
        <div className="neon-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))' }}>
          {RECOMENDADOS.map((item) => (
            <Link to="/contenido" key={item.creadora} className="neon-content-card" style={{ textDecoration: 'none' }}>
              <div className="neon-content-thumb" style={{ background: item.gradiente, height: 110 }} />
              <div style={{ padding: '10px 12px', color: '#C9B7D6', fontSize: 11.5 }}>{item.creadora} · {item.tipo}</div>
            </Link>
          ))}
        </div>
      </main>

      {mostrarReporte && <NeonReportModal onClose={() => setMostrarReporte(false)} />}

      <NeonFooter />
    </div>
  );
};

export default Ficha;
