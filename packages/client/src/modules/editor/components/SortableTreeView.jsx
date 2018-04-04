import React from 'react';
import SortableTree, { removeNodeAtPath, changeNodeAtPath } from 'react-sortable-tree';
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

  const showPropsModal = (node, path) => {
    console.log('ssssss', node);
    const nodePath = {
      node,
      path
    };
    props.setNodePath(nodePath);
    props.setModalVisibility(true);
    props.setModalContent(node);
  };

  const prepareData = (x, y) => {
    console.log('11111', x);
    console.log('22222', y);
    const data = {
      title: x.title,
      props: y
    };
    return data;
  };

  const onSubmit = prop => values => {
    const data = prepareData(prop[0], values);
    const nodePath = props.getNodePath;
    const path = nodePath.path;
    const newTree = {
      treeData2: changeNodeAtPath({
        treeData: props.getTree,
        path,
        getNodeKey,
        newNode: data
      })
    };
    //props.setTree(newTree);
    console.log('newTree', newTree);
    props.setModalVisibility(false);
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
          getNodeKey={getNodeKey}
          generateNodeProps={({ node, path }) => ({
            buttons: [
              <button onClick={() => remove(path)}>-</button>,
              <button onClick={() => showPropsModal(node, path)}>P</button>
            ]
          })}
        />
        <PropsForm
          onSubmit={onSubmit(props.getTree)}
          initialValues={props.getModalContent.props}
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
  getModalContent: PropTypes.object,
  getNodePath: PropTypes.object,
  setNodePath: PropTypes.object
};

export default SortableTreeView;
