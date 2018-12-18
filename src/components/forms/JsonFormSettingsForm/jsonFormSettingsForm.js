import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import { fillNodeData } from '../../../services/sortableTreeService/helper';
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
  const fieldsTypeEnum = ['string', 'integer', 'object', 'array', 'boolean'];

  const remove = path => {
    const newTree = removeNodeAtPath({
      treeData: props.jsonForm,
      path,
      getNodeKey
    });
    props.setProjectJsonForm(newTree);
  };

  const onChange = treeData2 => {
    props.setProjectJsonForm(treeData2);
  };

  const setNewTree = treeData2 => props.setTree({ treeData2 });

  const onSubmit = data => {
    props.setProjectJsonForm(data.formData);

    props.closeModal();
  };

  const showModal = (type, node, path) => {
    const nodePath = {
      node,
      path
    };
    props.setNodePath(nodePath);
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