import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import JsonFormUISettingsForm from '../../forms/JsonFormUISettingsForm';

const JsonFormUISettings = ({ closeModal, modalVisible }) => {

  return (
    <div className='modalDefault'>
      <Modal show={modalVisible} onHide={closeModal} bsSize="lg" dialogClassName='modalDefault'
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            JsonForm UI Schema
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <JsonFormUISettingsForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

JsonFormUISettings.propTypes = {
  modalVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

export default JsonFormUISettings;
