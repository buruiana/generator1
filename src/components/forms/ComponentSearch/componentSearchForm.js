import React from 'react';
import Form from "react-jsonschema-form";
import LayoutField from 'react-jsonschema-form-layout';
import isEmpty from 'lodash/isEmpty';

const ComponentsSearchForm = props => {
  const { providers } = props;
  const providersEnums = !isEmpty(providers)
    ? providers.map(provider => provider.name)
    : [];

  const schema = {
    type: "object",
    properties: {
      name: { type: "string", default: '' },
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
    provider: { "ui:placeholder": "Choose a provider" },
    'ui:field': 'layout',
    'ui:layout': [
      {
        name: { md: 4 },
        provider: { md: 4 },
        techno: { md: 4 }
      },
    ],
  };

  const onChange = data => {
    const { formData } = data;
    console.log('console: formDataformData', formData);
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
      >
        <button type="submit" className="hidden">Submit</button>
      </Form>
    </div>
  );
}

export default ComponentsSearchForm;