import React from 'react';
import Form from "react-jsonschema-form";

const AppSettingsForm = props => {
  const { setAppSettings, appSettings } = props;

  const schema = {
    type: 'object',
    properties: {
      destination: { type: 'string', title: 'Destination Path' },
      techno: {
        type: 'object',
        properties: {
          react: { type: 'boolean', title: 'react' },
          'react-dom': { type: 'boolean', title: 'react-dom' },
        },
      },
      state: {
        type: 'object',
        properties: {
          redux: { type: 'boolean', title: 'redux' },
          'react-redux': { type: 'boolean', title: 'react-redux' },
        },
      },
      navigation: {
        type: 'object',
        properties: {
          'react-router': { type: 'boolean', title: 'react-router' },
          'react-router-dom': { type: 'boolean', title: 'react-router-dom' },
          'react-router-native': { type: 'boolean', title: 'react-router-native' },
          'react-mini-router': { type: 'boolean', title: 'react-mini-router' },
        },
      },
      async: {
        type: 'object',
        properties: {
          'redux-thunk' : { type: 'boolean', title: 'redux-thunk' },
          'redux-saga': { type: 'boolean', title: 'redux-saga' },
        },
      },
      bundlers: {
        type: 'object',
        properties: {
          'webpack': { type: 'boolean', title: 'webpack' },
          'parcel-bundler': { type: 'boolean', title: 'parcel-bundler' },
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
          'firebase': { type: 'boolean', title: 'firebase' },
          'redux-saga-firebase': { type: 'boolean', title: 'redux-saga-firebase' },
        },
      },
      utils: {
        type: 'object',
        properties: {
          'lodash': { type: 'boolean', title: 'lodash' },
        },
      },
      ui: {
        type: 'object',
        properties: {
          'react-bootstrap': { type: 'boolean', title: 'react-bootstrap' },
          'material-ui/core': { type: 'boolean', title: 'material-ui/core' },
          'react-fontawesome': { type: 'boolean', title: 'react-fontawesome' },
        },
      },
      form: {
        type: 'object',
        properties: {
          'react-jsonschema-form': { type: 'boolean', title: 'react-jsonschema-form' },
        },
      },
      styles: {
        type: 'object',
        properties: {
          'sass': { type: 'boolean', title: 'sass' },
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

  const saveGenerate = () => {
    props.setGenerateApp(true);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={schema}
      uiSchema={uiSchema}
      onChange={log("changed")}
      onSubmit={onSubmit}
      onError={log("errors")}
      formData={appSettings}>
      <div>
        <button type="submit">Save</button>
        <button type="submit" onClick={saveGenerate}>Save and Generate</button>
      </div >
    </Form >
  );
}

export default AppSettingsForm;