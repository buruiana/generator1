import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal'
import PropsForm from '../../forms/Props';

const PropsInfo= ({
  modalVisible,
  closeModal,
  modalContent
}) => {
  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>{modalContent[0].modalContent.node.title}</Modal.Header>
        <Modal.Body>
          <PropsForm closeModal={closeModal} modalContent={modalContent[0].modalContent} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

PropsInfo.propTypes = {
  modalVisible: PropTypes.bool,
  closeModal: PropTypes.func
};

export default PropsInfo;
