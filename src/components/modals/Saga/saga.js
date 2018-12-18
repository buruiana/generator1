import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import SagaForm from '../../forms/Saga';

const Saga = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Saga Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <SagaForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Saga.propTypes = {
  modalVisible: PropTypes.bool,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Saga;
