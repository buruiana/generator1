import React from 'react';
import Form from "react-jsonschema-form";

const ProvidersForm = props => {
  const { name, path, id } = props.provider;

  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: "" },
      name: { type: "string", title: "Name", default: "" },
      path: { type: "string", title: "Path", default: "" }
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setSelectedProvider(formData);
    props.setProvider();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
    />
  );
}

export default ProvidersForm;