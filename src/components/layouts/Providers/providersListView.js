import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';
import ProvidersForm from '../../forms/Providers';

const ProvidersListView = props => {
  const providers = boxArray(props.providers);

  const deleteProvider = event => {
    props.setSelectedProvider({ id: event.target.id });
    props.deleteProvider();
  };

  const providersList = () => {
    return providers.map(provider => {
      const { name, id } = provider;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            <div id={id} onClick={deleteProvider}>Delete</div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ProvidersForm provider={provider}/>
          </Panel.Body>
        </Panel>
      );
    })
  };
  const newProvider = {
    name: '',
    path: '',
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
            <Panel.Title toggle>New Provider</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ProvidersForm provider={newProvider} />
          </Panel.Body>
        </Panel>
        {providersList()}
      </PanelGroup>
    </div>
  );
}

export default ProvidersListView;