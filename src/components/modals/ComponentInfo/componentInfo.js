import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal'
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';

const ComponentInfo = ({ closeModal, modalVisible, modalContent }) => {
  const renderDescription = () => {
    return <div>{modalContent.node.description}</div>;
  };

  const renderProps = () => {
    const propsInfo = modalContent.node.componentProps;
    return propsInfo.map(prop => {
      return (
        <Panel key={prop.name} eventKey={prop.name}>
          <Panel.Heading>
            <Panel.Title toggle componentClass="h1">{prop.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <div>
              {prop.propType}
            </div>
            <div>
              {prop.description}
            </div>
          </Panel.Body>
        </Panel>
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
            <textarea rows="20" cols="120" className='textarea-noBorder'>{renderDescription().props.children}</textarea>
            <PageHeader>Props</PageHeader>
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
