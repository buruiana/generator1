import React from 'react';
import Form from "react-jsonschema-form";

const SagasForm = props => {
  console.log('console: propsprops', props);
  const schema = {
    type: "array",
    items: {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Actions' },
        isActive: {type: 'boolean'}
      }
    },
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '' },
    name: { 'ui:disabled': true },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setSagas(formData);
    props.setModalVisibility(false);
  };

  const ArrayFieldTemplate = props => {
    return (
      <div className={props.className}>
        {props.items &&
          props.items.map(element => (
          <div key={element.index}>
              <div>{element.children}</div>
              <hr />
            </div>
          ))}
      </div>
    );
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      ArrayFieldTemplate={ArrayFieldTemplate}
      formData={props.sagas}
    />
  );
}

export default SagasForm;