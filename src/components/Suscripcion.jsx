import { useState } from 'react';
import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF7FCA" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconLock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8E7E9C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const PLANES = [
  {
    id: 'mensual',
    nombre: 'MENSUAL',
    precio: '$9.99',
    periodo: '/mes',
    features: ['Acceso a todo el contenido', 'Chat con creadoras', 'Cancelás cuando quieras'],
  },
  {
    id: 'trimestral',
    nombre: 'TRIMESTRAL',
    precio: '$24.99',
    periodo: '/3 meses',
    badge: 'MÁS ELEGIDO',
    destacado: true,
    features: ['Todo lo del plan mensual', '17% de ahorro', 'Contenido en calidad 4K'],
  },
  {
    id: 'anual',
    nombre: 'ANUAL',
    precio: '$79.99',
    periodo: '/año',
    features: ['Todo lo del plan trimestral', '33% de ahorro', 'Acceso anticipado'],
  },
];

const Suscripcion = () => {
  const [planSeleccionado, setPlanSeleccionado] = useState('trimestral');

  const handlePago = (evento) => {
    evento.preventDefault();
  };

  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main neon-app-main--narrow" style={{ maxWidth: 1000 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="neon-heading" style={{ fontSize: 'clamp(24px, 3.5vw, 32px)' }}>Elegí tu plan</h1>
          <p className="neon-subtext">Acceso ilimitado a contenido exclusivo de todas las creadoras.</p>
        </div>

        <div className="neon-pricing-grid">
          {PLANES.map((plan) => (
            <div key={plan.id} className={`neon-pricing-card ${plan.destacado ? 'neon-pricing-card--featured' : ''}`}>
              {plan.badge && <span className="neon-pricing-badge">{plan.badge}</span>}
              <div className="neon-pricing-card__label">{plan.nombre}</div>
              <div className="neon-pricing-card__price">{plan.precio}<span>{plan.periodo}</span></div>
              <ul className="neon-feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}><IconCheck /> {feature}</li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setPlanSeleccionado(plan.id)}
                className={`neon-btn ${plan.destacado || planSeleccionado === plan.id ? 'neon-btn--primary' : 'neon-btn--outline'}`}
              >
                {planSeleccionado === plan.id ? 'Plan elegido' : 'Elegir plan'}
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form onSubmit={handlePago} className="neon-card" style={{ maxWidth: 480 }}>
            <h2 className="neon-card__title" style={{ textAlign: 'left' }}>Datos de pago</h2>

            <div className="neon-field">
              <label htmlFor="nombreTarjeta">Nombre en la tarjeta</label>
              <input id="nombreTarjeta" className="neon-input" type="text" placeholder="Nombre completo" required />
            </div>
            <div className="neon-field">
              <label htmlFor="numeroTarjeta">Número de tarjeta</label>
              <input id="numeroTarjeta" className="neon-input" type="text" inputMode="numeric" placeholder="•••• •••• •••• ••••" required />
            </div>
            <div style={{ display: 'flex', gap: 14, marginBottom: 8 }}>
              <div className="neon-field" style={{ flex: 1 }}>
                <label htmlFor="vencimiento">Vencimiento</label>
                <input id="vencimiento" className="neon-input" type="text" placeholder="MM / AA" required />
              </div>
              <div className="neon-field" style={{ flex: 1 }}>
                <label htmlFor="cvv">CVV</label>
                <input id="cvv" className="neon-input" type="text" inputMode="numeric" placeholder="•••" required />
              </div>
            </div>

            <button type="submit" className="neon-btn neon-btn--primary">Confirmar pago</button>
            <p className="neon-hint" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              <IconLock /> Pago seguro y encriptado
            </p>
          </form>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Suscripcion;
