import React from 'react';
import Form from "react-jsonschema-form";
import LayoutField from 'react-jsonschema-form-layout';
import isEmpty from 'lodash/isEmpty';
import {
  REACT_NATIVE,
  REACT,
} from '../../../utils/constants';

const ComponentsSearchForm = props => {
  const { providers, projectTechno } = props;
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const technoTypeEnums = [REACT, REACT_NATIVE];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
      projectTechno: {
        type: 'string',
        enum: technoTypeEnums,
        default: projectTechno || undefined,
      },
      provider: {
        type: "string",
        enum: providersEnums,
      },
    },
  };

  const fields = {
    layout: LayoutField
  }

  const uiSchema = {
    name: {
      "ui:options": {
        "label": false,
      },
      "ui:placeholder": "Name",
    },
    projectTechno: {
      "ui:placeholder": "All technos",
      "ui:options": {
        "label": false,
      },
    },
    provider: {
      "ui:placeholder": "All providers",
      "ui:options": {
        "label": false,
      },
    },
    'ui:field': 'layout',
    'ui:layout': [
      {
        name: { md: 3 },
        projectTechno: { md: 2 },
        provider: { md: 3 },
      },
    ],
  };

  const onChange = data => {
    const { formData } = data;
    props.setFilterData(formData);
  };

  const log = (type) => console.log.bind(console, type);

  return (
    <div>
      <Form schema={schema}
        uiSchema={uiSchema}
        onChange={onChange}
        onError={log("errors")}
        fields={fields}
        autocomplete='off'
      >
        <button type="submit" className="hidden">Submit</button>
      </Form>
    </div>
  );
}

export default ComponentsSearchForm;