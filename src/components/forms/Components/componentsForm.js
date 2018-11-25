import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { Link } from "react-router";
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { history } from "../../../redux/store.js";
import {
  REACT_NATIVE,
  REACT,
  PROJECT_TECHNO,
} from '../../../utils/constants';

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
  const { providers, propTypes } = props;

  const technosEnums = [REACT, REACT_NATIVE];
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const propTypesEnums = !isEmpty(propTypes)
    ? propTypes.map(p => p.name)
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
      componentProps: {
        type: "array",
        items: {
          type: 'object',
          required: ['name'],
          properties: {
            name: { type: 'string', title: 'Name' },
            description: { type: 'string', title: 'Description' },
            propType: {
              type: 'string',
              title: 'PropType',
              enum: propTypesEnums,
            },
            propTypeIsrequired: { type: 'boolean', title: 'Prop Type isRequired' },
          }
        },
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
    componentProps: {
      items: {
        description: {
          "ui:widget": "textarea",
          "ui:options": {
            rows: 5
          }
        },
        propType: { "ui:placeholder": "Choose an propType" },
      },
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setComponent(formData);
    history.push('/components');
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div className="middle20">
      <PageHeader>
        {component.title || 'New Component'}
      </PageHeader>
      <Link to={`/components`} className="linkStyle">Back</Link>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        formData={component}
      />
    </div>
  );
}

export default ComponentsForm;