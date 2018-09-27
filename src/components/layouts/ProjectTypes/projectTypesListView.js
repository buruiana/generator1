import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';
import ProjectTypesForm from '../../forms/ProjectTypes';

const ProjectTypesListView = props => {
  const projectTypes = boxArray(props.projectTypes);

  const deleteProjectType = event => {
    props.setSelectedProjectType({ id: event.target.id });
    props.deleteProjectType();
  };

  const projectTypesList = () => {
    return projectTypes.map(projectType => {
      const { name, id } = projectType;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            <div id={id} onClick={deleteProjectType}>Delete</div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ProjectTypesForm projectType={projectType} />
          </Panel.Body>
        </Panel>
      );
    })
  };
  const newProjectType = {
    name: '',
    id: ''
  };

  return (
    <div>
      <PanelGroup
        accordion
        id="accordion-controlled-example"
      >
        <Panel key="new" eventKey="new" >
          <Panel.Heading>
            <Panel.Title toggle>New ProjectType</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ProjectTypesForm projectType={newProjectType} />
          </Panel.Body>
        </Panel>
        {projectTypesList()}
      </PanelGroup>
    </div>
  );
}

export default ProjectTypesListView;