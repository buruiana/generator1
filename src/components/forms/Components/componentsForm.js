import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import {
  REACT_NATIVE,
  REACT,
  PROJECT_TECHNO,
} from '../../../utils/constants';

const ComponentsForm = props => {
  const { title, id, description, techno, provider, componentProps } = props.component;
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
    props.setSelectedComponent(formData);
    props.setComponent();
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
      />
    </div>
  );
}

export default ComponentsForm;