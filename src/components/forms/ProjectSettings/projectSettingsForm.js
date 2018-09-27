import React from 'react';
import Form from "react-jsonschema-form";
import get from 'lodash/get';
import { boxArray } from '../../../utils';

const ProjectSettingsForm = props => {
  const { projectName, projectTechno, projectType, technos, projectTypes, componentType } = props;
  console.log('console: props---', props);

  const technoEnumNames = boxArray(technos).map(techno => {
    return techno.name;
  });

  const technoEnums = boxArray(technos).map(techno => {
    return techno.id;
  });

  const typeEnumNames = boxArray(projectTypes).map(projectType => {
    return projectType.name;
  });

  const typeEnums = boxArray(projectTypes).map(projectType => {
    return projectType.id;
  });

  const componentTypeEnums = ['1', '2'];
  const componentTypeEnumNames = ['Smart', 'Dumb'];

  const getProjectType = id => {
    return boxArray(projectTypes).filter(projectType => {
      return projectType.id === id;
    });
  };

  const getProjectTechno = id => {
    return boxArray(technos).filter(projecTechno => {
      return projecTechno.id === id;
    });
  };

  const schema = {
    type: "object",
    required: ["projectName", "projectTechno"],
    properties: {
      projectName: {
        type: "string",
        title: "Name",
        default: projectName
      },
      projectTechno: {
        type: "string",
        title: "Techno",
        enum: technoEnums,
        enumNames: technoEnumNames,
        default: get(projectTechno, '[0].id', '')
      },
      projectType: {
        type: "string",
        title: "Type",
        enum: typeEnums,
        enumNames: typeEnumNames,
        default: get(projectType, '[0].id', '')
      },
      componentType: {
        type: "string",
        title: "Component Type",
        enum: componentTypeEnums,
        enumNames: componentTypeEnumNames,
        default: componentType
      },
    },
    dependencies: {
      projectTechno: {
        properties: { "projectType": { "type": "string" } },
        required: ["projectType"],
      }
    }
  };
  const uiSchema = {
    projectType: { "ui:widget": "select" },
    projectTechno: { "ui:widget": "select" }
  };

  const onSubmit = data => {
    const { projectName, projectTechno, projectType, componentType } = data.formData;
    console.log('console: projectName, projectTechno, projectType componentType', projectName, projectTechno, projectType, componentType);
    props.setProjectName(projectName);
    props.setProjectTechno(getProjectTechno(projectTechno));
    if (projectType) props.setProjectType(getProjectType(projectType));
    if (componentType) props.setProjectComponentType(componentType);
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

export default ProjectSettingsForm;