import logo from '../../../img/LogoLust.png';
import '../../../css/neon-theme.css';

const NeonHeader = () => {
  return (
    <header className="neon-header">
      <span className="neon-logo-badge neon-logo-badge--sm">
        <img src={logo} alt="Logo de Lust" />
      </span>
      <span className="neon-header__wordmark">LUST</span>
    </header>
  );
};

export default NeonHeader;
