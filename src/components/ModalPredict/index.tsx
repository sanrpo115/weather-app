import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { WiDirectionUpRight, WiDirectionDownLeft } from "react-icons/wi";
import moment from 'moment';
import 'moment/locale/es-mx';

const ModalPredict = ({data, openModal, closeModal}) => {

  console.log('data', data)

  return (
    <Modal show={openModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pronóstico {moment(data.date).format("dddd DD")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );

}

export default ModalPredict;