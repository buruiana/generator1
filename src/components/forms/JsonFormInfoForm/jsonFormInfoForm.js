import React from 'react';
import Form from "react-jsonschema-form";
import { changeNodeAtPath } from 'react-sortable-tree';


const JsonFormInfoForm = props => {
  const { jsonForm } = props;
  const fieldsTypeEnum = ['string', 'integer', 'object', 'array', 'boolean'];
  const stringFormatWidgetEnum = ['email', 'uri', 'data-url', 'date', 'date-time'];

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const { node, path } = props.nodePath;

  const schema = {
    type: 'object',
    required: ['title', 'type'],
    properties: {
      title: {
        type: 'string',
        title: 'Name',
        default: ''
      },
      type: {
        type: 'string',
        title: 'Type',
        enum: fieldsTypeEnum,
        default: '',
      },
      enum: {
        type: 'string',
        title: 'Enum',
        default: '',
      },
      enumNames: {
        type: 'string',
        title: 'EnumNames',
        default: '',
      },
      defaultValue: {
        type: 'string',
        title: 'Default',
        default: ''
      },
      isRequired: {
        type: 'boolean',
        title: 'isRequired',
        default: false
      },
    },
  };
  const uiSchema = {
    type: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a type",
    },
    format: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a format",
    },
    'ui:order': ['title', 'type', 'format', 'enum', 'enumNames', 'defaultValue', 'isRequired'],
  };

  if (node.subtitle === 'String' || node.subtitle === 'Integer' || node.subtitle === 'Boolean') {
    uiSchema.type = {
      ...uiSchema.type,
     "ui:widget": "hidden"
    }
  }

  if (node.subtitle === 'String') {
    schema.properties = {
      ...schema.properties,
      format: {
        type: 'string',
        title: 'Format',
        enum: stringFormatWidgetEnum,
        default: '',
      },
    };
  }

  const onSubmit = data => {
    const { title, type, defaultValue } = data.formData;
    const newNode = { ...node };
    newNode.title = title;
    newNode.type = type;
    newNode.defaultValue = defaultValue;

    const newTree = changeNodeAtPath({
        treeData: jsonForm,
        path,
        getNodeKey,
        newNode
      });

    props.setProjectJsonForm(newTree);
    props.closeModal();
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

export default JsonFormInfoForm;