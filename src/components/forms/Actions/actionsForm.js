import React from 'react';
import Form from "react-jsonschema-form";

const ActionsForm = props => {
  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Name' },
        isActive: { type: 'boolean' },
        payload: {
          type: 'array',
          title: 'Payload',
          items: {
            type: 'object',
            properties: {
              payload: { type: 'string', title: 'Payload' },
            },
          }
        },
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '' },
    "ui:options": { removable: false, addable: false },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setActions(formData);
    props.setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.actions}
    />
  );
}

export default ActionsForm;