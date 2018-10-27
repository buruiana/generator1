import React from 'react';
import Form from "react-jsonschema-form";

const PropTypesForm = props => {
  const { name, id } = props.propType;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" }
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setPropType(formData);
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

export default PropTypesForm;