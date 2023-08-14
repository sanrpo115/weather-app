import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Cards from '../Cards';
import Stages from '../Stages';
import moment from 'moment';
import 'moment/locale/es-mx';
import './styles.scss';

const ModalPredict = ({data, openModal, closeModal}) => {

  console.log('data', data)

  return data.day ? <>
      <Modal show={openModal} onHide={closeModal} size='xl'>
        <Modal.Header closeButton>
          <Modal.Title>Pronóstico {moment(data.date).format("dddd DD")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="data-container">
            <Cards data={data.day}/>
            <div className="day-condition">
              <img className='icon' src={`https:${data.day.condition.icon}`} alt={data.day.condition.text} />
              <h4>{data.day.condition.text}</h4>
              <div className="astro-content">
                <Stages data={data.astro} fromModal={true} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={closeModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    : null;
}

export default ModalPredict;