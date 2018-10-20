import React from 'react';
import Form from "react-jsonschema-form";

const SmartForm = props => {
  console.log('console: propspropsprops', props);
  const schema = {
    type: 'object',
    properties: {
      hasConstructor: { type: 'boolean', title: 'Constructor' },
      hasState: { type: 'boolean', title: 'State' },
      lifeCycleMethods: {
        type: 'object',
        properties: {
          componentWillMount: { type: 'boolean', title: 'componentWillMount' },
          componentDidMount: { type: 'boolean', title: 'componentDidMount' },
          componentWillReceiveProps: { type: 'boolean', title: 'componentWillReceiveProps' },
          shouldComponentUpdate: { type: 'boolean', title: 'shouldComponentUpdate' },
          componentWillUpdate: { type: 'boolean', title: 'componentWillUpdate' },
          componentDidUpdate: { type: 'boolean', title: 'componentDidUpdate' },
          componentWillUnmount: { type: 'boolean', title: 'componentWillUnmount' },
        },
      },
    }
  };

  const uiSchema = {
    items: { 'ui:emptyValue': '' },
    "ui:options": { removable: false, addable: false },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setSmartSettings(formData);
    props.setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.smart}
    />
  );
}

export default SmartForm;