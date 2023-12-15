import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


// Esto es un componente con nombre camelname que se puede usar hubs
const VerificacionDeEdad = () => {
  // Estado...
  // Ciclo de vida -> como interactua con el tiempo, es decir, actualiza el estado tantos segundo...
  // JSX es como el HTML de mi aplicacion, no es HTML es JSX..
  const [pagina,setPagina] = useState();
  
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial',  }}
      >
        <Modal.Dialog>
          <Modal.Body>
            <Modal.Title>Verificación de edad 🧐</Modal.Title>
          </Modal.Body>

          <Modal.Body>
            <p>Este sitio web contiene material restringido a menores de edad, que incluye desnudez y representaciones explícitas de 
              actividad sexual. Al entrar, afirma que tiene por lo menos 18 años de edad o mayor en la 
              jurisdicción desde que está accediendo el sitio web para adultos y que da consentimiento en ver contenido sexualmente 
              explícito.</p>
          </Modal.Body>

          <Modal.Footer className="justify-content-center" >
            <Button class="btn btn-light" size="lg">Adulto</Button>
            <Button variant="dark" size="lg">Menor</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default VerificacionDeEdad
