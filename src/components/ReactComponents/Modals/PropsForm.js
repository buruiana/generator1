import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from "react-bootstrap";
import Form from "react-jsonschema-form";

const PropsForm = ({
  modalVisible,
  modalContent,
  closeModal
}) => {

  const { props } = modalContent.node;
  console.log('console: modalContent', props );
  const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
      title: { type: "string", title: "Title", default: "A new task" },
      done: { type: "boolean", title: "Done?", default: false }
    }
  };
  const properties = schema.properties;

  const propsInfo = Object.prototype.toString.call(modalContent.node.props) != '[object Array]'
    ? [modalContent.node.props]
    : modalContent.node.props;

  const propsInfo1 = Object.prototype.toString.call(properties) != '[object Array]'
    ? [properties]
    : properties;

  modalContent.node.props.map(prop => {
    properties[prop.name] = {
      type: "string",
      title: prop.name,
      default: prop.name
    }
  });

  console.log('console: ddddddddddd', properties);
  const log = (type) => console.log.bind(console, type);

  const renderForm = () => {
    return (
      <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
    );
  };

  return (
    <div>
      <Modal show={modalVisible} onHide={closeModal} bsSize="large"
        aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>{modalContent.node.title}</Modal.Header>
        <Modal.Body>
          {renderForm()}
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
