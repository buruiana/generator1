import React from 'react';
import Form from "react-jsonschema-form";

const ActionTypesForm = props => {
  console.log('console: ------------', props);
  const schema = {
    type: "array",
    required: ["name"],
    items: {
      type: "object",
      properties: {
        name: { type: 'string', title: 'Name'}
      }
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    console.log('console: formData', formData);
    props.setActionTypes(formData);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
    />
  );
}

export default ActionTypesForm;