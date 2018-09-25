import React from 'react';
import Form from "react-jsonschema-form";

const TechnosForm = props => {
  console.log('console: props', props);
  const { name } = props.techno;
  const schema = {
    title: "Technology",
    type: "object",
    required: ["name"],
    properties: {
      name: { type: "string", title: name, default: name },
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

export default TechnosForm;