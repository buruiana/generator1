import React from 'react';
import SortableTree, {
  removeNodeAtPath,
  getFlatDataFromTree,
} from 'react-sortable-tree';
import isEmpty from 'lodash/isEmpty';
import {
  JSON_FORM_INFO,
} from '../../modals/constants';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;
const treeData = [
  {
    title: '',
    subtitle: 'String',
  },
  {
    title: '',
    subtitle: 'Number',
  },
  {
    title: '',
    subtitle: 'Integer', },
  {
    title: '',
    subtitle: 'Boolean', },
  {
    title: '',
    subtitle: 'Object', },
  {
    title: '',
    subtitle: 'Array', },
];

const JsonFormSettingsForm = props => {
  const { jsonForm } = props;

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: jsonForm,
      path,
      getNodeKey
    });
    props.setProjectJsonForm(newTree);
  };

  const validateJsonForm = jsonForm => {
    const flatData = getFlatDataFromTree({
      treeData: jsonForm,
      getNodeKey: ({ treeIndex }) => treeIndex,
      ignoreCollapsed: false,
    });

    return flatData.find(el => {
      const isPrimitive = (el.node.subtitle === 'String' || el.node.subtitle === 'Integer' || el.node.subtitle === 'Boolean' || el.node.subtitle === 'Number');
      return (isPrimitive && !isEmpty(el.node.children));
    });
  };

  const onChange = treeData => {
    if (isEmpty(validateJsonForm(treeData))) {
      props.setProjectJsonForm(treeData);
    }
  };

  const showModal = (type, node, path) => {
    props.setNodePath({
      node,
      path,
      type,
    });
    const newEl = {
      modalName: type,
      modalVisible: true,
      modalContent: { node, type },
    };
    props.setCurrentModal(type);
    const newAllModals = [ ...props.allModals ];
    newAllModals.push(newEl);
    props.setAllModals(newAllModals);
  };

  const onChangeSchemaEditor = data => {
    props.setProjectJsonForm(data);
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <div className='flex'>
      <div
        style={{
          height: 400,
          width: '40%',
          float: 'left'
        }}
      >
        <SortableTree
          treeData={treeData}
          onChange={() => console.log('changed')}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
        />
      </div>

      <div
        style={{
          height: 400,
          width: '55%',
          float: 'left',
        }}
      >
        <SortableTree
          treeData={props.jsonForm}
          onChange={onChange}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <button onClick={() => remove(path)}>-</button>,
              <button onClick={() => showModal(JSON_FORM_INFO, node, path)}>P</button>
            ]
          })}
        />
      </div>
    </div>
  );
}

export default JsonFormSettingsForm;