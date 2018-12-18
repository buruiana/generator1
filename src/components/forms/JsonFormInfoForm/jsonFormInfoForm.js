import React from 'react';
import Form from "react-jsonschema-form";
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import { fillNodeData } from '../../../services/sortableTreeService/helper';
import {
  JSON_FORM_INFO,
} from '../../modals/constants';

const JsonFormInfoForm = props => {
  const { jsonForm } = props;
  const fieldsTypeEnum = ['string', 'integer', 'object', 'array', 'boolean'];



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
        title: 'Name',
        enum: fieldsTypeEnum,
        default: '',
      },
      default: {
        type: 'string',
        title: 'Name',
        default: ''
      },
    },
  };
  const uiSchema = {
    projectType: { "ui:widget": "select" },
    type: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a type"
    },
    projectType: { "ui:placeholder": "Choose a type" },
    componentType: { "ui:placeholder": "Choose a component type" },
  };

  const onSubmit = data => {
   // const { projectName, projectTechno, projectType, componentType } = data.formData;
console.log('console: datadata', data);
    // props.setProjectName(projectName);
    // props.setProjectTechno(projectTechno);
    // props.setProjectType(projectType);
    // props.setProjectComponentType(componentType);

    //props.setModalVisibility(false);
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