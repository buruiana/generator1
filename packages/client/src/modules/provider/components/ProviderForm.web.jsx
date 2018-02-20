import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, RenderField, Button } from '../../common/components/web';
import { required } from '../../../../../common/validation';

const ProviderForm = ({ handleSubmit, submitting, onSubmit }) => {
  return (
    <Form name="provider" onSubmit={handleSubmit(onSubmit)}>
      <Field name="name" component={RenderField} type="text" label="Name" validate={required} />
      <Field name="path" component={RenderField} type="text" label="Path" validate={required} />
      <Button color="primary" type="submit" disabled={submitting}>
        Save
      </Button>
    </Form>
  );
};

ProviderForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'provider',
  enableReinitialize: true
})(ProviderForm);
