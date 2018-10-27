import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import AppSettingsForm from '../../forms/AppSettings';

const AppSettings = ({ closeModal, modalVisible, modalContent }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            Project Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <AppSettingsForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ProjectSettings.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default AppSettings;
