import React from 'react';
import Form from "react-jsonschema-form";

const AppSettingsForm = props => {
  const { setAppSettings, setModalVisibility, appSettings } = props;

  const schema = {
    type: 'object',
    properties: {
      redux: { type: 'boolean', title: 'redux' },
      reactRedux: { type: 'boolean', title: 'react-redux' },
      reduxThunk: { type: 'boolean', title: 'redux-thunk' },
      reduxSaga: { type: 'boolean', title: 'redux-saga' },
      reactRouter: { type: 'boolean', title: 'React-Router' },
      reactRouterRedux: { type: 'boolean', title: 'react-router-redux' },
      reactIntl: { type: 'boolean', title: 'React-Intl' },
      reactIntlUniversal: { type: 'boolean', title: 'react-intl-universal' },
      i18next: { type: 'boolean', title: 'i18next' },
      lodash: { type: 'boolean', title: 'lodash' },
      firebase: { type: 'boolean', title: 'firebase' },
      react: { type: 'boolean', title: 'react' },
      reactBootstrap: { type: 'boolean', title: 'react-bootstrap' },
      reactJsonschemaForm: { type: 'boolean', title: 'react-jsonschema-form' },
      reduxSagaFirebase: { type: 'boolean', title: 'redux-saga-firebase' },
      fontAwesome: { type: 'boolean', title: 'react-fontawesome' },
    },
  };
  const uiSchema = {
    projectType: { "ui:widget": "select" },
    projectTechno: {
      "ui:widget": "select",
      "ui:placeholder": "Choose a technology"
    },
    projectType: { "ui:placeholder": "Choose a type" },
    componentType: { "ui:placeholder": "Choose a component type" },
  };

  const onSubmit = data => {
    const { formData } = data;
    setAppSettings(formData);
    setModalVisibility(false);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={appSettings}
    />
  );
}

export default AppSettingsForm;