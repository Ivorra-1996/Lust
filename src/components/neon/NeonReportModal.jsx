import { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../css/neon-theme.css';

const MOTIVOS = [
  'Contenido sin consentimiento',
  'Posible menor de edad',
  'Spam o suplantación',
  'Otro motivo',
];

const NeonReportModal = ({ onClose }) => {
  const [motivo, setMotivo] = useState(MOTIVOS[0]);
  const [detalle, setDetalle] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleEnviar = () => {
    setEnviado(true);
  };

  return (
    <div className="neon-modal-overlay" onClick={onClose}>
      <div className="neon-card" style={{ maxWidth: 480 }} onClick={(e) => e.stopPropagation()}>
        {enviado ? (
          <>
            <h2 className="neon-card__title">Gracias por tu reporte</h2>
            <p className="neon-card__subtitle">Nuestro equipo lo va a revisar a la brevedad.</p>
            <button type="button" className="neon-btn neon-btn--primary" onClick={onClose}>Cerrar</button>
          </>
        ) : (
          <>
            <h2 className="neon-card__title" style={{ textAlign: 'left' }}>Reportar contenido</h2>
            <p className="neon-card__subtitle" style={{ textAlign: 'left' }}>
              Ayudanos a mantener la comunidad segura. Tu reporte es anónimo.
            </p>

            {MOTIVOS.map((opcion) => (
              <label
                key={opcion}
                className={`neon-report-option ${motivo === opcion ? 'neon-report-option--selected' : ''}`}
              >
                <input
                  type="radio"
                  name="motivo"
                  value={opcion}
                  checked={motivo === opcion}
                  onChange={() => setMotivo(opcion)}
                  style={{ display: 'none' }}
                />
                <span className="neon-report-radio" />
                {opcion}
              </label>
            ))}

            <div className="neon-field" style={{ marginTop: 18 }}>
              <label htmlFor="detalle">Contános más (opcional)</label>
              <textarea
                id="detalle"
                className="neon-input"
                rows={3}
                placeholder="Describí brevemente lo que viste..."
                value={detalle}
                onChange={(e) => setDetalle(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button type="button" className="neon-btn neon-btn--outline" onClick={onClose}>Cancelar</button>
              <button type="button" className="neon-btn neon-btn--primary" onClick={handleEnviar}>Enviar reporte</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

NeonReportModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NeonReportModal;
