import React from 'react';
import Form from "react-jsonschema-form";
import { changeNodeAtPath, removeNodeAtPath } from 'react-sortable-tree';
import { fillJsonFormNodeData } from '../../../services/sortableTreeService/helper';
import {
  JSON_FORM_INFO,
} from '../../modals/constants';

const JsonFormInfoForm = props => {
  const { jsonForm } = props;
  const fieldsTypeEnum = ['string', 'integer', 'object', 'array', 'boolean'];
  const getNodeKey = ({ treeIndex }) => treeIndex;


  const schema = {
    type: 'object',
    required: ['title'],
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
      defaultValue: {
        type: 'string',
        title: 'Default',
        default: ''
      },
    },
  };
  const uiSchema = {
    type: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a type"
    },
  };

  const onSubmit = data => {
    const { title, type, defaultValue } = data.formData;
    const { node, path } = props.getNodePath;
    const newNode = { ...node };
    newNode.title = title;
    newNode.type = type;
    newNode.defaultValue = defaultValue;
    console.log('console: newNode', newNode);
    const newTree = changeNodeAtPath({
        treeData: props.jsonForm,
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