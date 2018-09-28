import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import ProjectSettingsForm from '../../forms/ProjectSettings';

const Actions = ({ closeModal, modalVisible, modalContent }) => {

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
            <ProjectSettingsForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Actions.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default Actions;
