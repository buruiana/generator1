import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";

const PropsForm = ({
  modalVisible,
  modalContent,
  closeModal
}) => {

  const renderForm = () => {
    return modalContent.node.props.map(prop => {
      return (
        <div key={prop.name}>
          <div className="row withLeftPadding">
            <div className="col-sm-6">
              <label className="row">{prop.name}</label>
            </div>
            <div className="col-sm-2">
              <Field name={`${prop.id - 1}.isActive`} type="checkbox" checked={prop.isActive} />
            </div>
            <div className="col-sm-4">
              <Field name={`${prop.id - 1}.val`} type="text" value={prop.val} component={RenderField} />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>{modalContent.node.title}</Modal.Header>
        <Modal.Body>
          body body
        </Modal.Body>
      </Modal>
    </div>
  );
};

PropsForm.propTypes = {
  modalVisible: PropTypes.bool,
  modalContent: PropTypes.object,
  closeModal: PropTypes.func
};

export default PropsForm;
