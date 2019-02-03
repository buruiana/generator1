import React from 'react';
import ReactDOM from 'react-dom'
import Form from 'react-jsonschema-form';
import schema from './schema';
import uiSchema from './uiSchema';

const Testform = props => {

  let formData = {
    username: 'username',
    useraddress: 'useraddress',
  };
  const onSubmit = data => {
    ReactDOM.render(<div>SCHEMA: {JSON.stringify(data.formData)}</div>,
      document.getElementById("form"));
  };
  const onChange = data => {
    ReactDOM.render(<div>SCHEMA: {JSON.stringify(data.formData)}</div>,
      document.getElementById("form"));
  };

  return (
    <div>
      <Form
        schema={schema}
        onSubmit={onSubmit}
        onChange={onChange}
        formData={formData}
      />
      <div id='form'>SCHEMA: {JSON.stringify(formData)}</ div>
    </div>
  );
};

export default Testform;