import { Link } from 'react-router-dom';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const CATEGORIAS = [
  { nombre: 'Glamour', cantidad: '312 creadoras', gradiente: 'linear-gradient(135deg,#FF3DAE,#7C1F63)' },
  { nombre: 'Cosplay', cantidad: '184 creadoras', gradiente: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)' },
  { nombre: 'Fitness', cantidad: '247 creadoras', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)' },
  { nombre: 'ASMR', cantidad: '98 creadoras', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)' },
  { nombre: 'Parejas', cantidad: '156 creadoras', gradiente: 'linear-gradient(135deg,#7C1F63,#8B5CF6)' },
  { nombre: 'Alternativo', cantidad: '72 creadoras', gradiente: 'linear-gradient(135deg,#3D1B6B,#FF6EC4)' },
];

const RESULTADOS = [
  { creadora: '@creator_042', tipo: 'Video', gradiente: 'linear-gradient(135deg,#FF3DAE,#7C1F63)', bloqueado: false },
  { creadora: '@creator_118', tipo: 'Premium', gradiente: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)', bloqueado: true },
  { creadora: '@creator_263', tipo: 'Video', gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)', bloqueado: false },
  { creadora: '@creator_509', tipo: 'Premium', gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)', bloqueado: true },
];

const Explorar = () => {
  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main">
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h1 className="neon-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 32px)' }}>Explorá todo el contenido</h1>
          <p className="neon-subtext" style={{ marginBottom: 24 }}>Buscá por creadora, categoría o tipo de contenido.</p>
          <input
            className="neon-input"
            style={{ maxWidth: 480, margin: '0 auto', borderRadius: 999, textAlign: 'center' }}
            type="search"
            placeholder="Buscar contenido, creadoras..."
          />
        </div>

        <div className="neon-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {CATEGORIAS.map((categoria) => (
            <div
              key={categoria.nombre}
              className="neon-content-card"
              style={{ background: categoria.gradiente, padding: 26, minHeight: 110, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', border: 'none' }}
            >
              <span style={{ color: '#F5EAF7', fontFamily: 'var(--neon-font-display)', fontWeight: 600, fontSize: 16 }}>{categoria.nombre}</span>
              <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 12, marginTop: 4 }}>{categoria.cantidad}</span>
            </div>
          ))}
        </div>

        <h2 className="neon-section-title">Populares en Glamour</h2>
        <div className="neon-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))' }}>
          {RESULTADOS.map((item) => (
            <Link to="/contenido" key={item.creadora} className="neon-content-card" style={{ textDecoration: 'none' }}>
              <div
                className={item.bloqueado ? 'neon-content-thumb neon-content-thumb--locked' : 'neon-content-thumb'}
                style={{ background: item.gradiente, height: 130 }}
              />
              <div style={{ padding: '10px 14px' }}>
                <div style={{ color: '#F5EAF7', fontSize: 12.5, fontWeight: 600 }}>{item.creadora}</div>
                <div style={{ color: '#8E7E9C', fontSize: 11 }}>{item.tipo}</div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Explorar;
