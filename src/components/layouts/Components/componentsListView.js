import React from 'react';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import Panel from 'react-bootstrap/lib/Panel';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import ComponentsForm from '../../forms/Components';
import ComponentPropsForm from '../../forms/ComponentProps';
import ComponentSearchForm from '../../forms/ComponentSearch';

const ComponentsListView = props => {
  const components = props.components;

  const deleteComponent = event => {
    props.deleteComponent({ id: event.target.id });
  };

  const filteredComponents = () => {
    return components.filter(el => {
      if (!isEmpty(props.searchData) && props.searchData.name) {
        return (el.title.toLowerCase().indexOf(props.searchData.name.toLowerCase()) !== -1
          && get(props.searchData, 'provider', el.provider) === el.provider)
      }
      return (get(props.searchData, 'provider', el.provider) === el.provider);
    });
  };

  const componentsList = () => {
    return filteredComponents().map(component => {
      const { title, id } = component;

      return (
        <Panel key={id} eventKey={title}>
          <Panel.Heading>
            <Panel.Title toggle componentClass="h1">{title}</Panel.Title>
            <div className='deleteButton' id={id} onClick={deleteComponent}>Delete</div>
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
    <div className="middle10">
      <ComponentSearchForm />
      <PanelGroup
        accordion
        id="components"
        defaultActiveKey='0'
      >
        <Panel key="new" eventKey="new">
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