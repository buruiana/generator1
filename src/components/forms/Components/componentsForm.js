import React from 'react';
import Form from "react-jsonschema-form";
import Panel from 'react-bootstrap/lib/Panel'
import PanelGroup from 'react-bootstrap/lib/PanelGroup';

const ComponentsForm = props => {
  const { title, id, description, techno, provider } = props.component;
  console.log('console: props', props);
  const componentProps = props.component.props;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      title: { type: "string", title: "Name", default: title },
      description: { type: "string", title: "Description", default: description },
      provider: { type: "string", title: "Provider", default: provider },
      techno: { type: "string", title: "Techno", default: techno },
    },
  };

  const uiSchema = {
    id: { "ui:widget": "hidden" },
    description: { "ui:widget": "textarea" },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setSelectedComponent(formData);
    props.setComponent();
  };

  const log = (type) => console.log.bind(console, type);

  const componentPropsList = () => {
    return componentProps.map(component => {
      const { name, id } = component;

      return (
        <Panel key={id} eventKey={name} >
          <Panel.Heading>
            <Panel.Title toggle>{name}</Panel.Title>
            {/* <div id={id} onClick={deleteComponent}>Delete</div> */}
          </Panel.Heading>
          <Panel.Body collapsible>
            {/* <ComponentsForm component={component} /> */}
          </Panel.Body>
        </Panel>
      );
    })
  };

  return (
    <div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
      <PanelGroup
        accordion
        id="props-form">
        {componentPropsList()}
      </PanelGroup>
    </div>
  );
}

export default ComponentsForm;