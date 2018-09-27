import React from 'react';
import Form from "react-jsonschema-form";
import { boxArray } from '../../../utils';

const ProjectSettingsForm = props => {
  const { projectName, projectTechno, technos } = props;
  console.log('console: props---', props);

  const enumNames = boxArray(technos).map(techno => {
    return techno.name;
  });
  const enums = boxArray(technos).map(techno => {
    return techno.id;
  });

  const schema = {
    type: "object",
    required: ["projectName", "projectTechno"],
    properties: {
      projectName: { type: "string", title: "Name", default: projectName },
      projectTechno: { type: "string", title: "Techno", enum: enums, enumNames, default: projectTechno},
    }
  };
  const uiSchema = {
    projectType: { "ui:widget": "select"  }
  };

  const onSubmit = data => {
    const { projectName, projectTechno } = data.formData;

    props.setProjectName(projectName);
    props.setProjectTechno(projectTechno);
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