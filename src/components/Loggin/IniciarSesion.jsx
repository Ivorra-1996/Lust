import { Modal, Button } from 'react-bootstrap';

const IniciarSesion = ({onSoyMayorClick, onSoyMenorClick}) => {
  return (
    <div className='d-flex align-items-center justify-content-center vh-100'>
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial',  }}
    >
      <Modal.Dialog>
        <Modal.Body>
          <Modal.Title>¡Bienvenid@ de nuevo! 😏</Modal.Title>
        </Modal.Body>

        <Modal.Body>
          <p>Estamos emocionados de tenerte aquí. Prepárate para disfrutar de un contenido excepcional y una experiencia única.</p>
        </Modal.Body>

       
      </Modal.Dialog>
    </div>
  </div>

  );
}

export default IniciarSesion
