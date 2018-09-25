import React from 'react';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel'
import { boxArray } from '../../../utils';
import ProvidersForm from '../../forms/Providers';

const ProvidersListView = props => {
  const providers = boxArray(props.providers);

  const providersList = () => {

    return providers.map(provider => {
      const { name } = provider;

      return (
        <Panel key={name} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ProvidersForm provider={provider}/>
          </Panel.Body>
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
        {providersList()}
      </PanelGroup>
    </div>
  );
}

export default ProvidersListView;