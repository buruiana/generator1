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
  const { jsonForm } = props;
  const booleanWidgetEnum = ['radio', 'select', 'checkbox', 'hidden', 'file'];
  const stringWidgetEnum = ['textarea', 'password', 'color'];

  const getTypeEnum = () => {
    switch (props.nodePath.node.subtitle) {
      case 'String':
        return booleanWidgetEnum;
      case 'Boolean':
        return stringWidgetEnum;
      default:
        return '';
    }
  };

  const schema = {
    type: 'object',
    required: ['widget'],
    properties: {
      widget: {
        type: 'string',
        title: 'ui:widget',
        enum: getTypeEnum(),
        default: ''
      },
      uiOptions: {
        type: 'boolean',
        title: 'ui:options',
        default: false
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
    },
  };

  const uiSchema = {
    widget: { "ui:placeholder": "Choose a type" },
  };

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
    console.log('console: props.nodePath', props.nodePath);
    if (props.nodePath.type === JSON_FORM_UI_SETTINGS) {
      return (
        <div>
          {JSON.stringify(props.nodePath)}
          <Form schema={schema}
            uiSchema={uiSchema}
            onChange={log("changed")}
            onSubmit={onSubmit}
            onError={log("errors")}
          />
        </div>
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
    <div className='flex'>
      <div
        style={{
          height: 400,
          width: '55%',
          float: 'left',
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
          height: 400,
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