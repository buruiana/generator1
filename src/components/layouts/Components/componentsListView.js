import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import ComponentsForm from '../../forms/Components';
import ComponentPropsForm from '../../forms/ComponentProps';

const ComponentsListView = props => {
  const components = props.components;

  const deleteComponent = event => {
    props.setSelectedComponent({ id: event.target.id });
    props.deleteComponent();
  };

  const componentsList = () => {
    return components.map(component => {
      const { title, id } = component;

      return (
        <Panel key={id} eventKey={title}>
          <Panel.Heading>
            <Panel.Title toggle componentClass="h1">{title}</Panel.Title>
            <div className='deleteButton' id={id} onClick={deleteComponent}><a>Delete</a></div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ComponentsForm component={component} />
            <PageHeader>Props</PageHeader>
            <ComponentPropsForm component={component} />
          </Panel.Body>
        </Panel>
      );
    })
  };
  const newComponent = {
    title: '',
    id: '',
    description: '',
    provider: '',
    techno: '',
    componentProps: [],
  };

  return (
    <div className="middle">
      <PanelGroup
        accordion
        id="components"
        activeKey='0'
      >
        <Panel key="new" eventKey="new" >
          <Panel.Heading>
            <Panel.Title toggle>New Component</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ComponentsForm component={newComponent} />
          </Panel.Body>
        </Panel>
        {componentsList()}
      </PanelGroup>
    </div>
  );
}

export default ComponentsListView;