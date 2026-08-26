import { Link } from 'react-router-dom';
import '../../../css/neon-theme.css';

const NeonFooter = () => {
  return (
    <footer className="neon-footer">
      <span className="neon-footer__legal">Sitio exclusivo para mayores de 18 años.</span>
      <div className="neon-footer__row">
        <span>© Lust, {new Date().getFullYear()}</span>
        <div className="neon-footer__links">
          <Link to="/terminos" className="neon-link" style={{ color: 'inherit', fontSize: 'inherit' }}>Términos</Link>
          <span>Privacidad</span>
          <span>Ayuda</span>
        </div>
      </div>
    </footer>
  );
};

export default NeonFooter;
