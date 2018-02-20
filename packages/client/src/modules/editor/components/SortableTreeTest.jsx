import React from 'react';
import SortableTree, { removeNodeAtPath } from 'react-sortable-tree';
import PropTypes from 'prop-types';
import 'react-sortable-tree/style.css';

const externalNodeType = 'yourNodeType';
const shouldCopyOnOutsideDrop = true;
const getNodeKey = ({ treeIndex }) => treeIndex;

const SortableTreeTest = props => {
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

  return (
    <div>
      <div
        style={{
          height: 350,
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
          height: 350,
          width: 350,
          float: 'left'
        }}
      >
        <SortableTree
          treeData={props.getTree}
          onChange={treeData2 => props.setTree({ treeData2 })}
          dndType={externalNodeType}
          shouldCopyOnOutsideDrop={shouldCopyOnOutsideDrop}
          generateNodeProps={({ path }) => ({
            buttons: [<button onClick={() => remove(path)}>-</button>]
          })}
        />
      </div>
    </div>
  );
};

SortableTreeTest.propTypes = {
  getTree: PropTypes.array,
  setTree: PropTypes.func,
  getDefaultTree: PropTypes.array
};

export default SortableTreeTest;
