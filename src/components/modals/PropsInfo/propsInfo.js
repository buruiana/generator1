import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal'
import PropsForm from '../../forms/Props';

const PropsInfo= ({
  modalVisible,
  modalContent,
  closeModal
}) => {

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>{modalContent.node.title}</Modal.Header>
        <Modal.Body>
          <PropsForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

PropsInfo.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  closeModal: PropTypes.func
};

export default PropsInfo;
