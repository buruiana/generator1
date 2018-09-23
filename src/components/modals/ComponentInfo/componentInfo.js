import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";

const ComponentInfo = ({ closeModal, modalVisible, modalContent }) => {
  const renderDescription = () => {
    return <div>{modalContent.node.description}</div>;
  };

  const renderProps = () => {
    const propsInfo = Object.prototype.toString.call(modalContent.node.props) != '[object Array]'
      ? [modalContent.node.props]
      : modalContent.node.props;
    return propsInfo.map(prop => {
      return (
        <div key={prop.name}>
          <div>{prop.name}</div>
          <hr />
          <div>{prop.description}</div>
          <hr />
          <div>{prop.type}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalContent.node.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            {renderDescription()}
            <hr />
            {renderProps()}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ComponentInfo.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default ComponentInfo;
