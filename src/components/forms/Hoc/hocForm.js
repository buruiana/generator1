import React from 'react';
import Form from "react-jsonschema-form";

const HocForm = props => {
  const schema = {
    type: 'object',
    properties: {
      connectRedux: { type: 'boolean', title: 'Connect To Redux' },
      mapStateToProps: { type: 'boolean', title: 'mapStateToProps' },
      mapDispatchToProps: { type: 'boolean', title: 'mapDispatchToProps' },
    },
  }

  const uiSchema = {
    "ui:options": { removable: false },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setHoc(formData);
    props.setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.hoc}
    />
  );
}

export default HocForm;