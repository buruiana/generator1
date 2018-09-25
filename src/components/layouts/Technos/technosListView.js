import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';
import TechnosForm from '../../forms/Technos';

const TechnosListView = props => {
  console.log('console: props', props);
  const technos = boxArray(props.technos);
  console.log('console: technos', technos);

  const renderTechnosList = () => {

    return technos.map(techno => {
      const { name } = techno;
      console.log('console: techno', techno);
      console.log('console: name', name);
      return (
        <Panel eventKey={name} key={name}>
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <TechnosForm techno={techno} />
          </Panel.Body>
        </Panel>
      );
    });
  };

    return (
    <div>
      <PanelGroup
        accordion
          id="accordion-controlled-example"
          key="technoListPanelGroup"
        >
          {renderTechnosList()}
      </PanelGroup>
    </div>
  );
}

export default TechnosListView;