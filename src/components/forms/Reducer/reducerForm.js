import React from 'react';
import Form from "react-jsonschema-form";

const ReducerForm = props => {
  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Action Type' },
        isActive: { type: 'boolean' },
        payloadInfo: {
          type: 'array',
          title: 'Payload',
          items: {
            type: 'object',
            properties: {
              payload: { type: 'string', title: 'Payload' },
              payloadVal: { type: 'string', title: 'Payload Value' },
              initVal: { type: 'string', title: 'Init Value' },
            }
          },
        },
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '', name: { 'ui:disabled': true } },
    "ui:options": { removable: false, addable: false }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setReducer(formData);
    props.closeModal();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.reducer}
    />
  );
}

export default ReducerForm;