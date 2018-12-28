import React from 'react';
import Form from "react-jsonschema-form";
import { changeNodeAtPath } from 'react-sortable-tree';

const JsonFormInfoForm = props => {
  const { jsonForm } = props;
  const fieldsTypeEnum = ['boolean', 'string', 'integer', 'number', 'object', 'array'];
  const stringFormatWidgetEnum = ['any', 'email', 'uri', 'data-url', 'date', 'date-time'];

  const getNodeKey = ({ treeIndex }) => treeIndex;
  const { node, path } = props.nodePath;

  const getUIOrder = () => {
    if (node.subtitle === 'String') {
      return ['title', 'format', 'enumVal', 'enumNames', 'defaultValue', 'isRequired'];
    }
    if (node.subtitle === 'Array') {
      return ['title', 'enumVal', 'enumNames', 'defaultValue', 'isRequired', 'uniqueItems'];
    }
    return ['title', 'enumVal', 'enumNames', 'defaultValue', 'isRequired'];
  };

  const schema = {
    type: 'object',
    required: ['title'],
    properties: {
      title: {
        type: 'string',
        title: 'Name',
        default: ''
      },
      enumVal: {
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
    format: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a format",
    },
    'ui:order': getUIOrder(),
  };

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

  if (node.subtitle === 'Array') {
    schema.properties = {
      ...schema.properties,
      uniqueItems: {
        type: 'boolean',
        title: 'uniqueItems',
        default: false,
      },
    };
  }

  const onSubmit = data => {
    const { title, defaultValue, enumVal, enumNames, isRequired, format, uniqueItems } = data.formData;

    const newNode = { ...node };
    newNode.title = title;
    newNode.defaultValue = defaultValue;
    newNode.enumVal = enumVal;
    newNode.enumNames = enumNames;
    newNode.isRequired = isRequired;
    newNode.format = format;
    newNode.type = node.subtitle.toLowerCase();
    newNode.uniqueItems = uniqueItems;

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
    <div>
      <Form schema={schema}
        noHtml5Validate={true}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        formData={node}
      />
    </div>
  );
}

export default JsonFormInfoForm;