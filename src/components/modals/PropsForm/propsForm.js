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
    type: "object",
    properties: {}
  };
  const properties = schema.properties;

  const propsInfo = Object.prototype.toString.call(modalContent.node.props) != '[object Array]'
    ? [modalContent.node.props]
    : modalContent.node.props;

  // const propsInfo1 = Object.prototype.toString.call(properties) != '[object Array]'
  //   ? [properties]
  //   : properties;

  propsInfo.map(prop => {
    properties[prop.name] = {
      type: "string",
      title: prop.name
    }
  });

  console.log('console: ddddddddddd', properties);
  const log = type => console.log.bind(console, type);

  const onSubmit = data => {
    console.log('console: aaaaaaaaa', data);
    console.log('console: bbbbbbbbb', modalContent.node);

    const { props } = { ...modalContent.node };
    console.log('console: props', Object.prototype.toString.call(props) != '[object Array]');
    let el = {};
    Object.keys(data.formData).forEach(key => {
      console.log('console: ddddddd', data.formData[key]);
      el = props.forEach(el => {
        console.log('console: oooooo', key === el.name , key, el );
        return el.name === key;
      });
      //el.val = data.formData[key];
      console.log('console: uuuuu', el);
    });

    console.log('console: eeeeeeeee', el);
  }

  const prepareData = row => {
    const element = {

    }
  };
  //   const prepareData = (x, y) => {
  //   return {
  //     id: x.id,
  //     title: x.title,
  //     description: x.description,
  //     props: y
  //   };
  // };

  // const onSubmit = prop => values => {
  //   console.log('console: 11111', prop);
  //   console.log('console: 22222', values);
  //   const data = prepareData(prop[0], values);
  //   const nodePath = props.getNodePath;
  //   const path = nodePath.path;
  //   const newTree = {
  //     treeData2: changeNodeAtPath({
  //       treeData: props.getTree,
  //       path,
  //       getNodeKey,
  //       newNode: data
  //     })
  //   };
  //   //props.setTree(newTree);
  //   console.log('newTree', newTree);
  //   props.setModalVisibility(false);
  // };

  const renderForm = () => {
    return (
      <Form schema={schema}
        onChange={log("changed")}
        onSubmit={onSubmit}
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
