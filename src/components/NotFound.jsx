import { Link } from 'react-router-dom';
import NeonHeader from './neon/NeonHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const NotFound = () => {
  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-main">
        <div className="neon-hero">
          <span
            style={{
              width: 96,
              height: 96,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 32,
            }}
          >
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="1.6" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
          <h1 className="neon-heading">No encontramos esta página</h1>
          <p className="neon-subtext">El contenido que buscás fue eliminado o el enlace ya no está disponible.</p>
          <Link to="/home" className="neon-btn neon-btn--primary neon-btn--sm">Volver al inicio</Link>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default NotFound;
