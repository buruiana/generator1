import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ActionTypesForm from '../../forms/ActionTypes';

const ActionTypes = ({ closeModal, modalVisible }) => {
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
            <ActionTypesForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ActionTypes.propTypes = {
  modalVisible: PropTypes.bool,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default ActionTypes;
