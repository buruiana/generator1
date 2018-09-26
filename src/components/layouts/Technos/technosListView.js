import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';
import TechnosForm from '../../forms/Technos';

const TechnosListView = props => {
  const technos = boxArray(props.technos);

  const deleteTechno = event => {
    props.setSelectedTechno({ id: event.target.id });
    props.deleteTechno();
  };

  const technosList = () => {
    return technos.map(techno => {
      const { name, id } = techno;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            <div id={id} onClick={deleteTechno}>Delete</div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <TechnosForm techno={techno} />
          </Panel.Body>
        </Panel>
      );
    })
  };
  const newTechno = {
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
            <Panel.Title toggle>New Techno</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <TechnosForm techno={newTechno} />
          </Panel.Body>
        </Panel>
        {technosList()}
      </PanelGroup>
    </div>
  );
}

export default TechnosListView;