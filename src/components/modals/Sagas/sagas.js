import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import SagasForm from '../../forms/Sagas';

const Sagas = ({ closeModal, modalVisible, modalContent }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Action Types
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <SagasForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Sagas.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Sagas;
