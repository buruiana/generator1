import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ReducerForm from '../../forms/Reducer';

const Reduc = ({ closeModal, modalVisible }) => {

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
            <ReducerForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Reduc.propTypes = {
  modalVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

export default Reduc;
