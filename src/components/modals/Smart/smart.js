import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import SmartForm from '../../forms/Smart';

const Smart = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Smart Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <SmartForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Smart.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Smart;
