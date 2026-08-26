import { NavLink, Link } from 'react-router-dom';
import logo from '../../../img/LogoLust.png';
import '../../../css/neon-theme.css';

const enlaceActivo = ({ isActive }) => (isActive ? 'neon-nav__active' : undefined);

const IconInicio = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12l9-9 9 9" /><path d="M5 10v10h14V10" />
  </svg>
);

const IconExplorar = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconMensajes = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const NeonAppHeader = () => {
  return (
    <>
      <header className="neon-app-header">
        <div className="neon-app-header__left">
          <Link to="/home" className="neon-app-header__brand">
            <span className="neon-logo-badge neon-logo-badge--sm">
              <img src={logo} alt="Logo de Lust" />
            </span>
            <span className="neon-header__wordmark">LUST</span>
          </Link>
          <nav className="neon-nav">
            <NavLink to="/home" className={enlaceActivo}>Inicio</NavLink>
            <NavLink to="/explorar" className={enlaceActivo}>Explorar</NavLink>
            <NavLink to="/mensajes" className={enlaceActivo}>Mensajes</NavLink>
          </nav>
        </div>
        <div className="neon-app-header__right">
          <Link to="/suscripcion" className="neon-btn neon-btn--primary neon-btn--sm">Hacerme Premium</Link>
          <Link to="/mi-cuenta">
            <span className="neon-avatar" />
          </Link>
        </div>
      </header>

      <nav className="neon-tabbar">
        <NavLink to="/home" className={enlaceActivo}><IconInicio />Inicio</NavLink>
        <NavLink to="/explorar" className={enlaceActivo}><IconExplorar />Explorar</NavLink>
        <NavLink to="/mensajes" className={enlaceActivo}><IconMensajes />Mensajes</NavLink>
        <NavLink to="/mi-cuenta" className={enlaceActivo}><span className="neon-avatar" style={{ width: 20, height: 20 }} />Perfil</NavLink>
      </nav>
    </>
  );
};

export default NeonAppHeader;
