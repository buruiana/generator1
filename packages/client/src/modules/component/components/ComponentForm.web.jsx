import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Form, RenderField, RenderSelect, Option, Button } from '../../common/components/web';
import { required } from '../../../../../common/validation';

const renderSelectOptions = provider => {
  return (
    <option key={`${provider.node.id}-${provider.node.name}`} value={provider.node.id}>
      {provider.node.name}
    </option>
  );
};

const ComponentForm = ({ handleSubmit, submitting, onSubmit, providers }) => {
  return (
    <Form name="component" onSubmit={handleSubmit(onSubmit)}>
      <Field name="name" component={RenderField} type="text" label="Name" validate={required} />
      <Field name="description" component={RenderField} type="text" label="Description" />
      <Field name="technology" component={RenderSelect} type="select" label="Technology">
        <Option value="1">React</Option>
        <Option value="2">React Native</Option>
      </Field>
      <Field name="provider" component={RenderSelect} type="select" label="Provider">
        {Object.values(providers.edges).map(renderSelectOptions)}
      </Field>
      <Button color="primary" type="submit" disabled={submitting}>
        Save
      </Button>
    </Form>
  );
};

ComponentForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  submitting: PropTypes.bool,
  providers: PropTypes.object
};

export default reduxForm({
  form: 'component',
  enableReinitialize: true
})(ComponentForm);
