import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

const ProvidersView = props => {
  //const { providers } = props;

  const providers = [{
    name: 'grgtr',
    path: 'sdadsa'
  }];

  const providersList = providers.map(provider => {
    console.log('console: provider', provider);
    return (
        <Panel eventKey={provider.name}>
          <Panel.Heading key={provider.name}>
            <Panel.Title toggle>{provider.name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>{provider.path}</Panel.Body>
        </Panel>
    );
  });

  return (
    <div>
      <PanelGroup
        accordion
        id="accordion-controlled-example"
        activeKey=''
        onSelect=''
      >
        {providersList}
      </PanelGroup>
    </div>
  );
}

export default ProvidersView;