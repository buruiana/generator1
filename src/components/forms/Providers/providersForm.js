import React from 'react';
import Form from "react-jsonschema-form";
import isEmpty from 'lodash/isEmpty';
import { Link } from "react-router";
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { history } from "../../../redux/store.js";
import {
  REACT_NATIVE,
  REACT,
} from '../../../utils/constants';

const ProvidersForm = props => {
  const providersArray = props.providers.filter(provider => provider.id === props.params.id);
  const technoTypeEnums = [REACT, REACT_NATIVE];

  let provider = {};
  if (!isEmpty(providersArray)) {
    provider = providersArray[0]
  } else {
    provider = {
      name: '',
      path: '',
      id: '',
      projectTechno: '',
    };
  }
  const { name, path, id, projectTechno, providerUrl } = provider;
  const schema = {
    type: "object",
    required: ["name"],
    properties: {
      id: { type: "string", title: "Id", default: id },
      name: { type: "string", title: "Name", default: name },
      path: { type: "string", title: "Path", default: path },
      providerUrl: { type: "string", title: "URL", default: providerUrl || '' },
      projectTechno: {
        type: 'string',
        title: 'Techno',
        enum: technoTypeEnums,
        default: projectTechno,
      },
    }
  };
  const uiSchema = {
    id: { "ui:widget": "hidden" },
    projectTechno: {
      "ui:placeholder": "Select techno",
      "ui:options": {
        "label": true,
      },
    },
  };

  const onSubmit = data => {
    const { formData } = data;
    props.setProvider(formData);
    history.push('/providers');
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className="middle20">
      <PageHeader>
        {provider.name || 'New Provider'}
      </PageHeader>
      <Link to={`/providers`} className="linkStyle">Back</Link>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={onSubmit}
        onError={log("errors")}
        />
    </div>
  );
}

export default ProvidersForm;