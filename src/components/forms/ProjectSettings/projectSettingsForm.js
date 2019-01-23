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
  PROJECT_DESTINATION,
  COMPONENT_TYPE,
 } from '../../../utils/constants';

const ProjectSettingsForm = props => {
  const { projectName, projectTechno, projectType, componentType, projectDestination } = props;
  const projectTypeEnums = [ APPLICATION, SERVICE, COMPONENT ];
  const componentTypeEnums = [ SMART, DUMB ];
  const technoTypeEnums = [ REACT, REACT_NATIVE ];

  const schema = {
    type: 'object',
    required: ['projectName', 'projectTechno', 'projectType' ],
    properties: {
      projectName: {
        type: 'string',
        title: PROJECT_NAME,
        default: projectName
      },
      projectDestination: {
        type: 'string',
        title: PROJECT_DESTINATION,
        default: projectDestination
      },
      projectTechno: {
        type: 'string',
        title: PROJECT_TECHNO,
        enum: technoTypeEnums,
        default: projectTechno,
      },
      projectType: {
        type: 'string',
        title: PROJECT_TYPE,
        enum: projectTypeEnums,
        default: projectType
      },
    },
    dependencies: {
      projectType: {
        oneOf: [
          {
            properties: {
              projectType: { enum: [ COMPONENT ] },
              componentType: {
                type: 'string',
                title: COMPONENT_TYPE,
                enum: componentTypeEnums,
                default: componentType
              },
            },
            required: [ 'componentType' ],
          },
        ]
      },
    }
  };
  const uiSchema = {
    projectType: { "ui:widget": "select" },
    projectTechno: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a technology"
    },
    projectType: { "ui:placeholder": "Choose a type" },
    componentType: { "ui:placeholder": "Choose a component type" },
  };

  const onSubmit = data => {
    const { projectName, projectTechno, projectType, componentType, projectDestination } = data.formData;

    props.setProjectName(projectName);
    props.setProjectTechno(projectTechno);
    props.setProjectType(projectType);
    props.setProjectDestination(projectDestination);
    props.setProjectComponentType(componentType);

    props.closeModal();
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={props}
    />
  );
}

export default ProjectSettingsForm;