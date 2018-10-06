import React from 'react';
import Form from "react-jsonschema-form";

const ActionTypesForm = props => {
  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Name' },
        isSuccess: { type: 'boolean' },
        isFail: { type: 'boolean' },
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '' },
    name: { 'ui:disabled': true }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setActionTypes(formData);
    props.setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.actionTypes}
    />
  );
}

export default ActionTypesForm;