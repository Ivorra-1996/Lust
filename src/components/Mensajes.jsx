import { useState } from 'react';
import NeonAppHeader from './neon/NeonAppHeader';
import '../../css/neon-theme.css';

const CONVERSACIONES_INICIALES = [
  {
    id: '042',
    nombre: '@creator_042',
    gradiente: 'linear-gradient(135deg,#FF3DAE,#8B5CF6)',
    mensajes: [
      { de: 'ella', texto: '¡Hola! Bienvenido a mi contenido exclusivo' },
      { de: 'yo', texto: '¡Hola! Me encantó tu última publicación' },
      { de: 'ella', texto: '¡Gracias por suscribirte! Esta semana subo contenido nuevo' },
    ],
  },
  {
    id: '118',
    nombre: '@creator_118',
    gradiente: 'linear-gradient(135deg,#8B5CF6,#3D1B6B)',
    mensajes: [{ de: 'ella', texto: 'Subí contenido nuevo hoy' }],
  },
  {
    id: '263',
    nombre: '@creator_263',
    gradiente: 'linear-gradient(135deg,#FF6EC4,#4A1E8C)',
    mensajes: [{ de: 'el', texto: 'Empezando el vivo en breve' }],
  },
  {
    id: '509',
    nombre: '@creator_509',
    gradiente: 'linear-gradient(135deg,#4A1E8C,#FF3DAE)',
    mensajes: [{ de: 'ella', texto: '¡Hola! ¿Cómo estás?' }],
  },
];

const IconSend = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0B0212"><path d="M2 21l21-9L2 3v7l15 2-15 2z" /></svg>
);

const IconVolver = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9B7D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const Mensajes = () => {
  const [conversaciones, setConversaciones] = useState(CONVERSACIONES_INICIALES);
  const [activaId, setActivaId] = useState(CONVERSACIONES_INICIALES[0].id);
  const [texto, setTexto] = useState('');
  const [mostrarChatMobile, setMostrarChatMobile] = useState(false);

  const activa = conversaciones.find((c) => c.id === activaId);

  const enviarMensaje = () => {
    if (!texto.trim()) return;
    setConversaciones((prev) =>
      prev.map((c) => (c.id === activaId ? { ...c, mensajes: [...c.mensajes, { de: 'yo', texto }] } : c))
    );
    setTexto('');
  };

  const abrirConversacion = (id) => {
    setActivaId(id);
    setMostrarChatMobile(true);
  };

  return (
    <div className="neon-page">
      <NeonAppHeader />

      <div className="neon-chat-shell">
        <aside className={`neon-chat-list ${mostrarChatMobile ? 'neon-chat-list--oculto-mobile' : ''}`}>
          <div className="neon-chat-list__title">Mensajes</div>
          {conversaciones.map((c) => (
            <div
              key={c.id}
              className={`neon-chat-item ${c.id === activaId ? 'neon-chat-item--active' : ''}`}
              onClick={() => abrirConversacion(c.id)}
            >
              <span className="neon-avatar" style={{ background: c.gradiente }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="neon-chat-item__name">{c.nombre}</div>
                <div className="neon-chat-item__preview">{c.mensajes[c.mensajes.length - 1]?.texto}</div>
              </div>
            </div>
          ))}
        </aside>

        <section className={`neon-chat-main ${mostrarChatMobile ? '' : 'neon-chat-main--oculto-mobile'}`}>
          <div className="neon-chat-header">
            <button type="button" className="neon-chat-back" onClick={() => setMostrarChatMobile(false)} aria-label="Volver a mensajes">
              <IconVolver />
            </button>
            <span className="neon-avatar" style={{ background: activa.gradiente }} />
            <div>
              <div style={{ color: '#F5EAF7', fontSize: 14, fontWeight: 600 }}>{activa.nombre}</div>
              <div style={{ color: '#8E7E9C', fontSize: 11.5 }}>Suscriptor activo</div>
            </div>
          </div>

          <div className="neon-chat-messages">
            {activa.mensajes.map((mensaje, indice) => (
              <div key={indice} className={`neon-bubble ${mensaje.de === 'yo' ? 'neon-bubble--sent' : 'neon-bubble--received'}`}>
                {mensaje.texto}
              </div>
            ))}
          </div>

          <div className="neon-chat-input-row">
            <input
              className="neon-input"
              style={{ borderRadius: 999 }}
              type="text"
              placeholder="Escribí un mensaje..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && enviarMensaje()}
            />
            <button type="button" className="neon-send-btn" onClick={enviarMensaje} aria-label="Enviar mensaje">
              <IconSend />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mensajes;
