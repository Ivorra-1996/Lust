import { Modal, Button } from 'react-bootstrap';

const VerificacionDeEdad = ({onSoyMayorClick, onSoyMenorClick}) => {
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
            <Button variant="light" size="lg" onClick={onSoyMayorClick}>Adulto</Button>
            <Button variant="dark" size="lg" onClick={onSoyMenorClick}>Menor</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
}

export default VerificacionDeEdad
