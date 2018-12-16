import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import JsonFormSettingsForm from '../../forms/JsonFormSettingsForm';

const JsonFormSettings = ({ closeModal, modalVisible, modalContent }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            JsonForm Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <JsonFormSettingsForm />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

JsonFormSettings.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  closeModal: PropTypes.func
};

export default JsonFormSettings;
