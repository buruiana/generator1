import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import PropTypes from 'prop-types';
import 'react-sortable-tree/style.css';
import PropsForm from './PropsForm';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const SortableTreeView = props => {
  const remove = path => {
    const newTree = {
      treeData2: removeNodeAtPath({
        treeData: props.getTree,
        path,
        getNodeKey
      })
    };
    props.setTree(newTree);
  };

  const showPropsModal = node => {
    props.setModalVisibility(true);
    props.setModalContent(node);
  };

  const onSubmit = props => values => {
    console.log('prop', props);
    console.log('form', values);
  };

  return (
    <div>
      <div
        style={{
          height: 850,
          width: 350,
          float: 'left'
        }}
      >
        <SortableTree
          treeData={props.getDefaultTree}
          onChange={() => console.log('changed')}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
        />
      </div>

      <div
        style={{
          height: 650,
          width: 350,
          float: 'left'
        }}
      >
        <SortableTree
          treeData={props.getTree}
          onChange={treeData2 => props.setTree({ treeData2 })}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <button onClick={() => remove(path)}>-</button>,
              <button onClick={() => showPropsModal(node)}>P</button>
            ]
          })}
        />
        <PropsForm
          onSubmit={onSubmit(props.getTree)}
          initialValues={props.getTree}
          getModalContent={props.getModalContent}
          getModalVisible={props.getModalVisible}
          setModalVisibility={props.setModalVisibility}
        />
      </div>
    </div>
  );
};

SortableTreeView.propTypes = {
  getTree: PropTypes.array,
  setTree: PropTypes.func,
  getDefaultTree: PropTypes.array,
  setModalVisibility: PropTypes.func,
  setModalContent: PropTypes.func,
  getModalVisible: PropTypes.bool,
  getModalContent: PropTypes.object
};

export default SortableTreeView;
