import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import AppSettingsForm from '../../forms/AppSettings';

const AppSettings = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            App Settings
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <AppSettingsForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

AppSettings.propTypes = {
  modalVisible: PropTypes.bool,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default AppSettings;
