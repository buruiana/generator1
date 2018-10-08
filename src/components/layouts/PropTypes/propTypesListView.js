import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import PropTypesForm from '../../forms/PropTypes';
import { boxArray } from '../../../utils';

const PropTypesListView = props => {
  const propTypes = props.propTypes;

  const deletePropType = event => {
    props.setSelectedPropType({ id: event.target.id });
    props.deletePropType();
  };

  const propTypesList = () => {
    return boxArray(propTypes).map(propType => {
      const { name, id } = propType;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            <div id={id} onClick={deletePropType}>Delete</div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <PropTypesForm propType={propType}/>
          </Panel.Body>
        </Panel>
      );
    })
  };
  const newPropType = {
    name: '',
    id: ''
  };

  return (
    <div className="middle20">
      <PanelGroup
        accordion
        id="accordion-controlled-example"
      >
        <Panel key="new" eventKey="new" >
          <Panel.Heading>
            <Panel.Title toggle>New PropType</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <PropTypesForm propType={newPropType} />
          </Panel.Body>
        </Panel>
        {propTypesList()}
      </PanelGroup>
    </div>
  );
}

export default PropTypesListView;