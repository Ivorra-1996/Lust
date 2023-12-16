import { Modal, Button } from 'react-bootstrap';
import '../../css/modal.css';

const VerificacionDeEdad = ({onSoyMayorClick, onSoyMenorClick}) => {
  return (
   
      <div
        className="modal show  d-flex align-items-center justify-content-center vh-100"
        style={{ display: 'block', position: 'initial',  }}
       
      >
        <div  className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content bg-black"  style={{ borderRadius: '52px' }}>
            <div className="text-center">
              <img src='../../img/LogoLust.png' alt="Logo de Lust" height={200} />
            </div>
            <Modal.Body>
              <div className="fw-bold text-center">
              <p className="fs-1 text-warning">Verificación de edad 🧐</p>
              <p className='text-white'>
                Este sitio web contiene material restringido a menores de edad, que incluye desnudez y representaciones explícitas de actividad sexual. Al entrar, afirma que tiene por lo menos 18 años de edad o mayor en la jurisdicción desde que está accediendo el sitio web para adultos y que da consentimiento en ver contenido sexualmente explícito.
              </p>
              </div>
              <div className="d-grid gap-5 d-md-flex justify-content-center text-center">
                <Button className="btn btn-light btn-lg w-80 text-warning font-arial fw-bold" onClick={onSoyMayorClick}>
                  Adulto
                </Button>
                <Button className="btn btn-light btn-lg w-80 text-warning font-arial fw-bold" onClick={onSoyMenorClick}>
                  Menor
                </Button>
              </div>
            </Modal.Body> 
          </div>
        </div>
      </div>
    
  );
}

export default VerificacionDeEdad
