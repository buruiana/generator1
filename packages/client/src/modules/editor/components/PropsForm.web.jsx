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

const PropsForm = ({ handleSubmit, submitting, onSubmit, setModalVisibility, getModalVisible, getModalContent }) => {
  const closeModal = () => {
    setModalVisibility(false);
  };

  const renderForm = () => {
    return getModalContent.props.map(prop => {
      return (
        <div key={prop.name}>
          <div className="row">
            <div className="col-sm-6">&nbsp;</div>
            <div className="col-sm-2">
              <label className="col-sm-2">Active</label>
            </div>
            <div className="col-sm-4">
              <label className="col-sm-10">Value</label>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <label className="row">{prop.name}</label>
            </div>
            <div className="col-sm-2">
              <Field name={`${prop.id}-isActive`} component={RenderCheckBox} type="checkbox" />
            </div>
            <div className="col-sm-4">
              <Field name={`${prop.id}-val`} component={RenderField} type="text" />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Modal isOpen={getModalVisible} toggle={closeModal}>
        <ModalHeader toggle={closeModal}>{getModalContent.title}</ModalHeader>
        <Form name="componentProps" onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Field name="test" component={RenderCheckBox} type="checkbox" />
            <FieldArray name="props" component={renderForm} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" disabled={submitting}>
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
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'componentProps',
  enableReinitialize: true
})(PropsForm);
