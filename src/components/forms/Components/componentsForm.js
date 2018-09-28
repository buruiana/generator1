import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import Panel from 'react-bootstrap/lib/Panel'
import PanelGroup from 'react-bootstrap/lib/PanelGroup';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import ComponentPropsForm from '../../forms/ComponentProps';
import {
  REACT_NATIVE,
  REACT,
  PROJECT_TECHNO,
} from '../../../utils/constants';

const ComponentsForm = props => {

  const { title, id, description, techno, provider } = props.component;
  const { providers } = props;
  const componentProps = props.component.props;
  const technoTypeEnums = [REACT, REACT_NATIVE];
  const providersTypeEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const schema = {
    type: "object",
    required: ["title"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      title: { type: "string", title: "Name", default: title },
      description: { type: "string", title: "Description", default: description },
      provider: {
        type: "string",
        title: "Provider",
        enum: providersTypeEnums,
        default: provider,
      },
      techno: {
        type: 'string',
        title: PROJECT_TECHNO,
        enum: technoTypeEnums,
        default: techno,
      },
    },
  };

  const uiSchema = {
    id: { "ui:widget": "hidden" },
    description: { "ui:widget": "textarea" },
  };

  const onSubmit = data => {
    const { formData } = data;

    formData.props = componentProps;
    props.setSelectedComponent(formData);
    props.setComponent();
  };

  const log = (type) => console.log.bind(console, type);

  const deleteComponentProp = event => {
    props.setSelectedComponent({ id: event.target.id });
    props.deleteComponent();
  };

  const componentPropsList = () => {
    return componentProps.map(prop => {
      const { name, id } = prop;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            <div id={id} onClick={deleteComponentProp}>Delete</div>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ComponentPropsForm prop={prop} />
          </Panel.Body>
        </Panel>
      );
    })
  };

  const newProp = {
    name: '',
    description: '',
    id: '',
    propType: ''
  };


  return (
    <div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
      <PageHeader>Props</PageHeader>
      <PanelGroup
        accordion
        id="props-form">
        <Panel key="new" eventKey="new" >
          <Panel.Heading>
            <Panel.Title toggle>New Prop</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            <ComponentPropsForm prop={newProp} />
          </Panel.Body>
        </Panel>
        {componentPropsList()}
      </PanelGroup>
    </div>
  );
}

export default ComponentsForm;