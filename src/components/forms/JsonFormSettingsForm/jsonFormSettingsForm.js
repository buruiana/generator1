import React from 'react';
import Form from "react-jsonschema-form";
import {
  APPLICATION,
  SERVICE,
  COMPONENT,
  SMART,
  DUMB,
  REACT_NATIVE,
  REACT,
  PROJECT_TECHNO,
  PROJECT_TYPE,
  PROJECT_NAME,
  COMPONENT_TYPE,
 } from '../../../utils/constants';

const JsonFormSettingsForm = props => {
  const { jsonForm } = props;
  const fieldsTypeEnum = ['string', 'integer', 'object', 'array', 'boolean'];

  const schema = {
    type: "array",
    items: {
      type: 'object',
      required: ['name', 'fieldType'],
      properties: {
        name: { type: 'string', title: 'Name' },
        description: { type: 'string', title: 'Description' },
        default: { type: 'string', title: 'Default' },
        fieldType: {
          type: 'string',
          title: 'Field Type',
          enum: fieldsTypeEnum,
          default: ''
        },
      },
      dependencies: {
        fieldType: {
          oneOf: [
            {
              properties: {
                fieldType: { enum: ['object'] },
                fieldType1: {
                  type: 'string',
                  title: 'Field Type',
                  enum: fieldsTypeEnum,
                  default: ''
                },
              },
            },
          ]
        },
      },
    },
  };

  const uiSchema = {
    items: {
      fieldType: {
        "ui:widget": "select",
        "ui:placeholder": "Choose type"
      },
    },
  };

  const onSubmit = data => {
    //const { projectName, projectTechno, projectType, componentType } = data.formData;

    props.setProjectJsonForm(data.formData);

    props.setModalVisibility(false);
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

export default JsonFormSettingsForm;