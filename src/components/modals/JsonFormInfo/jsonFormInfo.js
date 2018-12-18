import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import JsonFormInfoForm from '../../forms/JsonFormInfoForm';

const JsonFormInfo = ({ closeModal, modalVisible }) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            JsonForm Field
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <JsonFormInfoForm closeModal={closeModal} />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

JsonFormInfo.propTypes = {
  modalVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

export default JsonFormInfo;
