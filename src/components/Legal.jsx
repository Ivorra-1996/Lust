import NeonHeader from './neon/NeonHeader';
import NeonFooter from './neon/NeonFooter';
import '../../css/neon-theme.css';

const SECCIONES = [
  'Aceptación de términos',
  'Verificación de edad',
  'Suscripciones y pagos',
  'Contenido y conducta',
  'Privacidad de datos',
  'Contacto',
];

const Legal = () => {
  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-app-main" style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
        <aside style={{ width: 220, flexShrink: 0 }}>
          <div style={{ color: '#8E7E9C', fontSize: 11.5, letterSpacing: 1.5, marginBottom: 16 }}>CONTENIDO</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {SECCIONES.map((seccion, indice) => (
              <span key={seccion} style={{ color: indice === 0 ? '#F5EAF7' : '#C9B7D6', fontSize: 13.5, fontWeight: indice === 0 ? 600 : 400 }}>
                {indice + 1}. {seccion}
              </span>
            ))}
          </div>
        </aside>

        <div style={{ flex: 1, minWidth: 260, maxWidth: 720 }}>
          <h1 className="neon-heading" style={{ fontSize: 28, marginBottom: 6 }}>Términos y condiciones</h1>
          <p style={{ color: '#8E7E9C', fontSize: 12.5, marginBottom: 36 }}>Última actualización: 25 de agosto, 2026</p>

          <h2 style={{ color: '#F5EAF7', fontSize: 15, fontWeight: 600, marginBottom: 10 }}>1. Aceptación de términos</h2>
          <p className="neon-subtext" style={{ textAlign: 'left' }}>
            Al acceder a Lust confirmás que leíste, entendiste y aceptás estos términos. Si no estás de acuerdo, no debés utilizar el sitio.
          </p>

          <h2 style={{ color: '#F5EAF7', fontSize: 15, fontWeight: 600, marginBottom: 10 }}>2. Verificación de edad</h2>
          <p className="neon-subtext" style={{ textAlign: 'left' }}>
            Lust contiene material exclusivamente para personas mayores de 18 años. El acceso está condicionado a la verificación de tu fecha de nacimiento y a declarar que sos mayor de edad en tu jurisdicción.
          </p>

          <h2 style={{ color: '#F5EAF7', fontSize: 15, fontWeight: 600, marginBottom: 10 }}>3. Suscripciones y pagos</h2>
          <p className="neon-subtext" style={{ textAlign: 'left' }}>
            Las suscripciones se renuevan automáticamente al finalizar cada período, salvo cancelación previa desde tu cuenta. Los pagos son procesados por un proveedor externo especializado.
          </p>

          <h2 style={{ color: '#F5EAF7', fontSize: 15, fontWeight: 600, marginBottom: 10 }}>4. Contenido y conducta</h2>
          <p className="neon-subtext" style={{ textAlign: 'left', marginBottom: 0 }}>
            No se permite compartir contenido sin consentimiento, contenido que involucre menores, ni conductas de acoso hacia otras personas usuarias. Todo contenido reportado es revisado por nuestro equipo.
          </p>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default Legal;
