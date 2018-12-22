import React from 'react';
import SortableTree from 'react-sortable-tree';
import isEqual from 'lodash/isEqual';
import Form from "react-jsonschema-form";
import {
  JSON_FORM_UI_SETTINGS,
} from '../../modals/constants';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const JsonFormUISettingsForm = props => {
  console.log('console: ---------------------------------------', props);
  const { jsonForm } = props;
  const booleanWidgetEnum = ['radio', 'select', 'checkbox'];
  const stringWidgetEnum = ['textarea', 'password', 'color', 'text'];
  const integerWidgetEnum = ['updown', 'range', 'radio'];
  const html5InputTypesEnum = ['text', 'password', 'submit', 'reset', 'radio', 'checkbox', 'button', 'color', 'date', 'datetime-local', 'email', 'month', 'number', 'range', 'search', 'tel', 'time', 'url', 'week'];

  const getTypeEnum = () => {
    console.log('console: ===========', props.nodePath.node);
    switch (props.nodePath.node.subtitle) {
      case 'String':
        return stringWidgetEnum;
      case 'Boolean':
        return booleanWidgetEnum;
      case 'Integer':
      case 'Number':
        return integerWidgetEnum;
      default:
        return '';
    }
  };

  const schema = {
    type: 'object',
    required: ['widget'],
    properties: {
      uiWidget: {
        type: 'object',
        title: 'ui:widget',
        properties: {
          widget: { type: 'string', title: 'ui:widget', enum: getTypeEnum(), default: '' },
          uiHidden: { type: 'boolean', title: 'hidden' },
        },
      },
      uiOptions: {
        type: 'object',
        title: 'ui:options',
        properties: {
          classNames: { type: 'string', title: 'classNames', default: '' },
          label: { type: 'boolean', title: 'hasLabel', default: true },
          inputType: { type: 'string', title: 'inputType', enum: html5InputTypesEnum },
          backgroundColor: { type: 'string', title: 'backgroundColor', default: '' },
          rows: { type: 'integer', title: 'rows', default: 50 },
        },
      },
      uiDisabled: {
        type: 'boolean',
        title: 'ui:disabled',
        default: false
      },
      uiReadonly: {
        type: 'boolean',
        title: 'ui:readonly',
        default: false
      },

      uiEnumDisabled: {
        type: 'boolean',
        title: 'ui:enumDisabled',
      },
      uiInline: {
        type: 'boolean',
        title: 'inline',
      },
      uiHelp: {
        type: 'string',
        title: 'ui:help',
        default: '',
      },
      uiTitle: {
        type: 'string',
        title: 'ui:title',
        default: '',
      },
      uiDescription: {
        type: 'string',
        title: 'ui:description',
        default: '',
      },
      uiAutofocus: {
        type: 'string',
        title: 'ui:autofocus',
        default: '',
      },
      uiPlaceholder: {
        type: 'string',
        title: 'ui:placeholder',
        default: '',
      },
    },
  };

  const uiSchema = {
    uiWidget: {
      widget: { "ui:placeholder": "Choose a type" },
    },
    uiOptions: {
      inputType: { "ui:placeholder": "Choose a type" },
    },
  };

  if (props.nodePath.node.type === 'string') {
    stringWidgetEnum.push('file');
  }
  if (props.nodePath.node.type === 'object') {
    schema.properties.uiOptions.properties = {
      ...schema.properties.uiOptions.properties,
      expandable: { type: 'boolean', title: 'expandable' },
    };
  }
  if (props.nodePath.node.type === 'array') {
    schema.properties.uiOptions.properties = {
      ...schema.properties.uiOptions.properties,
      orderable: { type: 'boolean', title: 'orderable' },
      addable: { type: 'boolean', title: 'addable' },
      removable: { type: 'boolean', title: 'removable' },
    };
  }


  const onChange = treeData2 => {
    props.setProjectJsonForm(treeData2);
  };

  const onSubmit = data => {
    props.setProjectJsonForm(data.formData);

    props.closeModal();
  };

  const setForm = (type, node, path) => {
    props.setNodePath({
      node,
      path,
      type,
    });
  };

  const showForm = () => {
    if (props.nodePath.type === JSON_FORM_UI_SETTINGS) {
      return (
        <Form schema={schema}
          uiSchema={uiSchema}
          onChange={log("changed")}
          onSubmit={onSubmit}
          onError={log("errors")}
          //formData={jsonForm}
        />
      );
    }
    return null;
  };

  const getButtonClass = path => {
    if (isEqual(path, props.nodePath.path)) {
      return 'redButton';
    }
    return '';
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className='flex mainContainer'>
      <div
        style={{
          width: '45%',
          float: 'left',
          height: '500px'
        }}
      >
        <SortableTree
          treeData={jsonForm}
          onChange={onChange}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <button onClick={() => setForm(JSON_FORM_UI_SETTINGS, node, path)} className={getButtonClass(path)}>edit</button>
            ]
          })}
        />
      </div>
      <div
        style={{
          width: '55%',
          float: 'left',
        }}
      >
        {showForm()}
      </div>
    </div>
  );
}

export default JsonFormUISettingsForm;