import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';

const TechnosListView = props => {
  const technos = boxArray(props.technos);

  const technosList = () => {

    return technos.map(techno => {
      const { name } = techno;

      return (
        <Panel key={name} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>{name}</Panel.Body>
        </Panel>
      );
    })
  };

  return (
    <div>
      <PanelGroup
        accordion
        id="accordion-controlled-example"
      >
        {technosList()}
      </PanelGroup>
    </div>
  );
}

export default TechnosListView;