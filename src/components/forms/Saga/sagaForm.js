import React from 'react';
import Form from "react-jsonschema-form";

const SagaForm = props => {

  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Action Type' },
        watcher: { type: 'string', title: 'Watcher' },
        isActive: {type: 'boolean'}
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '', name: { 'ui:disabled': true } },
    "ui:options": { removable: false, addable: false }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setSaga(formData);
    props.closeModal();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.saga}
    />
  );
}

export default SagaForm;