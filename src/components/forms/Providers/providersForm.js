import React from 'react';
import Form from "react-jsonschema-form";

const ProvidersForm = props => {
  const { name, path } = props.provider;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string", title: "Name", default: name },
      path: { type: "string", title: "Path", default: path }
    }
  };

  const onSubmit = data => {
    console.log('console: data', data);
    const { formData } = data;
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

export default ProvidersForm;