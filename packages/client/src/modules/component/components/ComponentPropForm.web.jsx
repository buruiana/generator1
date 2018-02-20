import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, RenderField, Row, Col, Label, Button } from '../../common/components/web';
import { required, minLength } from '../../../../../common/validation';

const ComponentPropForm = ({ handleSubmit, submitting, initialValues, onSubmit }) => {
  let operation = 'Add';
  if (initialValues.id !== null) {
    operation = 'Edit';
  }

  return (
    <Form name="prop" onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col xs={2}>
          <Label>{operation} prop</Label>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <Field name="name" component={RenderField} type="text" validate={[required, minLength(1)]} />
        </Col>
        <Col xs={8}>
          <Field name="description" component={RenderField} type="text" />
        </Col>
        <Col xs={8}>
          <Field name="type" component={RenderField} type="text" />
        </Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Button color="primary" type="submit" className="float-right" disabled={submitting}>
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

ComponentPropForm.propTypes = {
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'prop',
  enableReinitialize: true
})(ComponentPropForm);
