import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';

const ComponentPropsForm = props => {
  const propTypesEnums = !isEmpty(props.propTypes)
    ? props.propTypes.map(p => p.name)
    : [];

  const schema = {
    type: "array",
    items: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string', title: 'Name' },
        description: { type: 'string', title: 'Description' },
        propType: {
          type: 'string',
          title: 'PropType',
          enum: propTypesEnums,
        },
        propTypeIsrequired: { type: 'boolean', title: 'Prop Type isRequired' },
      }
    },
  };

  const uiSchema = {
    items: {
      description: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 5
        }
      },
      propType: { "ui:placeholder": "Choose an propType" },
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    let newComponent = {
      title: props.component.title,
      description: props.component.description,
      provider: props.component.provider,
      techno: props.component.techno,
      componentProps: formData,
      id: props.component.id,
    };

    props.setComponent(newComponent);
    props.closeModal();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props.component.componentProps}
    />
  );
}

export default ComponentPropsForm;