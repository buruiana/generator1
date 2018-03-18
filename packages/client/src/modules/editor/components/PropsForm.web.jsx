import React from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import {
  Form,
  RenderField,
  RenderCheckBox,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../common/components/web';

const PropsForm = ({ handleSubmit, onSubmit, setModalVisibility, getModalVisible, getModalContent }) => {
  const closeModal = () => {
    setModalVisibility(false);
  };

  const renderFields = prop => {
    console.log('prop', prop);
    getModalContent.props.map(
      <div key={prop.name}>
        <div>
          <label className="row">{prop.name}</label>
        </div>
        <div className="row">
          <label className="col-sm-2">Active</label>
          <label className="col-sm-10">Value</label>
        </div>
        <div className="row">
          <div className="col-sm-2">
            <Field name={`${prop.id}-isActive`} component={RenderCheckBox} type="checkbox" />
          </div>
          <div className="col-sm-10">
            <Field name={`${prop.id}-val`} component={RenderField} type="text" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Modal isOpen={getModalVisible} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{getModalContent.title}</ModalHeader>
        <Form name="componentProps" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <FieldArray name="props" component={renderFields} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Save
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

PropsForm.propTypes = {
  setModalVisibility: PropTypes.func,
  setModalContent: PropTypes.func,
  getModalVisible: PropTypes.bool,
  getModalContent: PropTypes.object,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func
};

export default reduxForm({
  form: 'componentProps',
  enableReinitialize: true
})(PropsForm);
