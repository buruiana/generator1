import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal'
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Panel from 'react-bootstrap/lib/Panel';
import Well from 'react-bootstrap/lib/Well';

const ComponentInfo = ({ closeModal, modalVisible, modalContent }) => {
  const renderDescription = () => {
    return modalContent[0].modalContent.node.description
      ? (
        <textarea rows={Math.round(modalContent[0].modalContent.node.description.length / 33)} cols="120" className='textarea-noBorder'>
          {modalContent[0].modalContent.node.description}
        </textarea>
      )
      : null;
  };

  const renderProps = () => {
    const propsInfo = modalContent[0].modalContent.node.componentProps;
    return propsInfo.map(prop => {
      return (
        <Panel key={prop.name} eventKey={prop.name} bsStyle='info'>
          <Panel.Heading>
            <Panel.Title toggle componentClass="h1">{prop.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <div>
              {prop.propType}
            </div>
            <div>
              <textarea rows={Math.round(prop.description.length / 30)} cols="118" className='textarea-noBorder'>
                {prop.description}
              </textarea>
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
            {modalContent[0].modalContent.node.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h5><span className='compInfo'>Techno:</span> <span className='compInfo1'>{modalContent[0].modalContent.node.techno}</span></h5>
            <h5><span className='compInfo'>Provider:</span> <span className='compInfo1'>{modalContent[0].modalContent.node.provider}</span></h5>
            <hr />
            {renderDescription()}
            <h3>Props</h3>
            {renderProps()}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

ComponentInfo.propTypes = {
  modalVisible: PropTypes.bool,
  componentInfo: PropTypes.object,
  closeModal: PropTypes.func
};

export default ComponentInfo;
