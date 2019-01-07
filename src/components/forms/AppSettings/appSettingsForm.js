import React from 'react';
import Form from "react-jsonschema-form";

const AppSettingsForm = props => {
  const { setAppSettings, appSettings } = props;

  const schema = {
    type: 'object',
    properties: {
      destination: { type: 'string', title: 'Destination Path' },
      state: {
        type: 'object',
        properties: {
          redux: { type: 'boolean', title: 'redux' },
        },
      },
      navigation: {
        type: 'object',
        properties: {
          reactRouter: { type: 'boolean', title: 'React-Router' },
        },
      },
      async: {
        type: 'object',
        properties: {
          reduxThunk: { type: 'boolean', title: 'redux-thunk' },
          reduxSaga: { type: 'boolean', title: 'redux-saga' },
        },
      },
      bundlers: {
        type: 'object',
        properties: {
          webpack: { type: 'boolean', title: 'react-redux' },
          parcel: { type: 'boolean', title: 'parcel' },
        },
      },
      int: {
        type: 'object',
        properties: {
          reactIntl: { type: 'boolean', title: 'React-Intl' },
          reactIntlUniversal: { type: 'boolean', title: 'react-intl-universal' },
          i18next: { type: 'boolean', title: 'i18next' },
        },
      },
      backend: {
        type: 'object',
        properties: {
          firebase: { type: 'boolean', title: 'firebase' },
          reduxSagaFirebase: { type: 'boolean', title: 'redux-saga-firebase' },
        },
      },
      utils: {
        type: 'object',
        properties: {
          lodash: { type: 'boolean', title: 'lodash' },
        },
      },
      ui: {
        type: 'object',
        properties: {
          reactBootstrap: { type: 'boolean', title: 'react-bootstrap' },
          materialUI: { type: 'boolean', title: 'material-ui/core' },
          fontAwesome: { type: 'boolean', title: 'react-fontawesome' },
        },
      },
      form: {
        type: 'object',
        properties: {
          reactJsonschemaForm: { type: 'boolean', title: 'react-jsonschema-form' },
        },
      },
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
    props.closeModal();
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