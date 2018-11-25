import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import {
  REACT_NATIVE,
  REACT,
  PROJECT_TECHNO,
} from '../../../utils/constants';
import ComponentPropsForm from '../ComponentProps';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const ComponentsForm = props => {
  const componenArray = props.components.filter(component => component.id === props.params.id);
  let component = {};
  if (!isEmpty(componenArray)) {
    component = componenArray[0]
  } else {
    component = {
      title: '',
      id: '',
      description: '',
      provider: '',
      techno: '',
      componentProps: [],
    };
  }

  const { title, id, description, techno, provider, componentProps } = component;
  const { providers } = props;
  const technosEnums = [REACT, REACT_NATIVE];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const schema = {
    type: "object",
    required: ['title', 'provider', 'techno'],
    properties: {
      id: { type: "string", title: "Id", default: id },
      title: { type: "string", title: "Name", default: title },
      description: { type: "string", title: "Description", default: description },
      provider: {
        type: "string",
        title: "Provider",
        enum: providersEnums,
        default: provider,
      },
      techno: {
        type: 'string',
        title: PROJECT_TECHNO,
        enum: technosEnums,
        default: techno,
      },
    },
  };

  const uiSchema = {
    id: { "ui:widget": "hidden" },
    description: {
      "ui:widget": "textarea",
      "ui:options": {
        rows: 15
      }
    },
    provider: { "ui:placeholder": "Choose a provider" },
    techno: { "ui:placeholder": "Choose a technology" },
  };

  const onSubmit = data => {
    const { formData } = data;

    formData.componentProps = componentProps;
    props.setComponent(formData);
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="middle20">
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
      <PageHeader>Props</PageHeader>
      <ComponentPropsForm component={component} />
    </div>
  );
}

export default ComponentsForm;