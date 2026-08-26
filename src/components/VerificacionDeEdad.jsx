import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NeonHeader from './neon/NeonHeader';
import NeonFooter from './neon/NeonFooter';
import logo from '../../img/LogoLust.png';
import '../../css/neon-theme.css';

const EDAD_MINIMA = 18;

const formatearFecha = (valor) => {
  const digitos = valor.replace(/\D/g, '').slice(0, 8);
  const partes = [digitos.slice(0, 2), digitos.slice(2, 4), digitos.slice(4, 8)].filter(Boolean);
  return partes.join('/');
};

const calcularEdad = (dia, mes, anio) => {
  const d = parseInt(dia, 10);
  const m = parseInt(mes, 10);
  const y = parseInt(anio, 10);

  if (!d || !m || !y || anio.length < 4) return null;

  const fecha = new Date(y, m - 1, d);
  const esFechaValida =
    fecha.getFullYear() === y && fecha.getMonth() === m - 1 && fecha.getDate() === d;
  if (!esFechaValida) return null;

  const hoy = new Date();
  let edad = hoy.getFullYear() - y;
  const cumplioEsteAnio =
    hoy.getMonth() > m - 1 || (hoy.getMonth() === m - 1 && hoy.getDate() >= d);
  if (!cumplioEsteAnio) edad -= 1;

  return edad;
};

const VerificacionDeEdad = () => {
  const navigate = useNavigate();
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState('');

  const digitos = fecha.replace(/\D/g, '');
  const dia = digitos.slice(0, 2);
  const mes = digitos.slice(2, 4);
  const anio = digitos.slice(4, 8);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const edad = calcularEdad(dia, mes, anio);

    if (edad === null) {
      setError('Ingresá una fecha de nacimiento válida.');
      return;
    }

    if (edad < EDAD_MINIMA) {
      window.location.href = 'https://www.google.com';
      return;
    }

    navigate('/login');
  };

  return (
    <div className="neon-page">
      <NeonHeader />

      <main className="neon-main">
        <div className="neon-hero">
          <span className="neon-logo-badge neon-logo-badge--lg">
            <img src={logo} alt="Logo de Lust" />
          </span>
          <span className="neon-eyebrow">SOLO PARA MAYORES DE 18</span>
          <h1 className="neon-heading">
            Antes de entrar, <span className="neon-heading__accent">confirmemos tu edad</span>
          </h1>
          <p className="neon-subtext">
            Este sitio contiene contenido explícito para adultos. Ingresá tu fecha de nacimiento
            para verificar tu edad.
          </p>

          <form className="neon-card" onSubmit={handleSubmit}>
            <div className="neon-field">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input
                id="fechaNacimiento"
                className="neon-input neon-input--center"
                type="text"
                inputMode="numeric"
                maxLength={10}
                placeholder="DD/MM/AAAA"
                value={fecha}
                onChange={(e) => setFecha(formatearFecha(e.target.value))}
                required
              />
            </div>

            {error && <p className="neon-error">{error}</p>}

            <button type="submit" className="neon-btn neon-btn--primary">
              Continuar
            </button>
            <p className="neon-hint">
              Verificamos tu edad de forma segura. No almacenamos tu fecha de nacimiento.
            </p>
          </form>
        </div>
      </main>

      <NeonFooter />
    </div>
  );
};

export default VerificacionDeEdad;
