import NeonAppHeader from './neon/NeonAppHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const IconReloj = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FF7FCA" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
);
const IconMensaje = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const IconTarjeta = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);
const IconVivo = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /></svg>
);
const IconPromo = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#FF7FCA" strokeWidth="2"><path d="M12 2l2.2 6.8H21l-5.6 4.1 2.2 6.9L12 15.8l-5.6 4 2.2-6.9L3 8.8h6.8z" /></svg>
);

const HOY = [
  { icono: <IconReloj />, acento: true, texto: '@creator_042 publicó contenido nuevo', tiempo: '10 min', noLeida: true },
  { icono: <IconMensaje />, texto: 'Nuevo mensaje de @creator_118', tiempo: '2 h' },
  { icono: <IconTarjeta />, texto: 'Tu pago mensual fue procesado con éxito', tiempo: '6 h' },
];

const SEMANA = [
  { icono: <IconVivo />, texto: '@creator_263 va a empezar un en vivo pronto', tiempo: '2 días' },
  { icono: <IconPromo />, acento: true, texto: '15% off en tu próxima renovación anual', tiempo: '4 días' },
];

const Notificaciones = () => {
  const renderFila = (item, indice) => (
    <div key={indice} className={`neon-notification-row ${item.noLeida ? 'neon-notification-row--unread' : ''}`}>
      <span className={`neon-notification-icon ${item.acento ? 'neon-notification-icon--accent' : ''}`}>{item.icono}</span>
      <span style={{ flex: 1, color: item.noLeida ? '#F5EAF7' : '#C9B7D6', fontSize: 13.5 }}>{item.texto}</span>
      {item.noLeida && <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#FF3DAE' }} />}
      <span style={{ color: '#8E7E9C', fontSize: 11.5 }}>{item.tiempo}</span>
    </div>
  );

  return (
    <div className="neon-page">
      <NeonAppHeader />

      <main className="neon-app-main neon-app-main--narrow">
        <h1 className="neon-heading" style={{ fontSize: 26, marginBottom: 28 }}>Notificaciones</h1>

        <p className="neon-notification-group-label">HOY</p>
        <div style={{ marginBottom: 32 }}>{HOY.map(renderFila)}</div>

        <p className="neon-notification-group-label">ESTA SEMANA</p>
        <div>{SEMANA.map(renderFila)}</div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Notificaciones;
