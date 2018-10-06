import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import HocForm from '../../forms/Hoc';

const Hoc = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Hoc
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <HocForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Hoc.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Hoc;
