import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ActionsForm from '../../forms/Actions';

const Actions = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Actions Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <ActionsForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Actions.propTypes = {
  modalVisible: PropTypes.bool,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Actions;
